<!-- ParticlesBackground.vue -->
<template>
    <canvas 
        ref="particlesCanvas" 
        class="absolute inset-0 pointer-events-none w-full h-full"
        :style="{ opacity }"
    ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    containerId: {
        type: String,
        required: true
    },
    config: {
        type: Object,
        default: () => ({
            particleCount: 150,
            particleSize: 2,
                            particleColor: 'rgb(14 136 168)',
                lineColor: 'rgba(14, 136, 168, 0.4)',
            particleSpeed: 0.3,
            lineDistance: 250,
            mouseMoveRadius: 150
        })
    },
    opacity: {
        type: Number,
        default: 1
    }
});

const particlesCanvas = ref(null);
let ctx = null;
let animationFrame = null;
let particles = [];
let mouse = { x: null, y: null };

// En móvil menos partículas para no saturar; en desktop se mantiene el count original
const getEffectiveParticleCount = () => {
    const w = window.innerWidth;
    if (w < 640) return Math.floor(props.config.particleCount * 0.28);  // ~34 en móvil
    if (w < 768) return Math.floor(props.config.particleCount * 0.4);   // ~48
    if (w < 1024) return Math.floor(props.config.particleCount * 0.65);   // ~78
    return props.config.particleCount;
};

// Calcular cantidad de partículas y tamaño basado en el viewport
const calculateParticleSettings = (width, height) => {
    const viewportArea = window.innerWidth * window.innerHeight;
    const baseArea = 1920 * 1080; // Área de referencia
    
    // Mantener una densidad consistente de partículas (solo para tamaño/líneas)
    const densityFactor = Math.min(1.5, Math.max(0.5, viewportArea / baseArea));
    const particleCount = getEffectiveParticleCount();
    
    // Ajustar el tamaño de las partículas según el viewport
    const baseSize = props.config.particleSize;
    const sizeScale = Math.min(1.2, Math.max(0.8, Math.sqrt(viewportArea) / Math.sqrt(baseArea)));
    const particleSize = baseSize * sizeScale;
    
    return {
        count: particleCount,
        size: particleSize,
        lineWidth: 1.5 * sizeScale
    };
};

// Crear una nueva partícula
const createParticle = (canvas, keepPosition = false, oldParticle = null) => {
    const particle = {
        x: keepPosition && oldParticle ? oldParticle.x : Math.random() * canvas.width,
        y: keepPosition && oldParticle ? oldParticle.y : Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * props.config.particleSpeed,
        vy: (Math.random() - 0.5) * props.config.particleSpeed,
        size: props.config.particleSize
    };
    
    // Ajustar velocidad si la partícula está fuera del canvas
    if (keepPosition && oldParticle) {
        if (particle.x < 0 || particle.x > canvas.width) {
            particle.x = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
            particle.y = Math.random() * canvas.height;
        }
    }
    
    return particle;
};

// Inicializar partículas
const initParticles = () => {
    const canvas = particlesCanvas.value;
    if (!canvas) return;

    let resizeObserver;
    let resizeTimeout;

    // Ajustar tamaño del canvas y partículas
    const updateCanvasSize = () => {
        const container = document.getElementById(props.containerId);
        if (!container) return;

        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        
        // Solo actualizar si el tamaño realmente cambió
        if (canvas.width === newWidth && canvas.height === newHeight) return;

        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Calcular factores de escala
        const scaleX = newWidth / oldWidth;
        const scaleY = newHeight / oldHeight;

        // Ajustar posiciones de partículas existentes proporcionalmente
        particles.forEach(p => {
            // Mantener la posición relativa
            p.x = p.x * scaleX;
            p.y = p.y * scaleY;

            // Ajustar velocidades para mantener el movimiento proporcional
            p.vx = (Math.random() - 0.5) * props.config.particleSpeed;
            p.vy = (Math.random() - 0.5) * props.config.particleSpeed;
        });

        // Añadir o remover partículas según viewport (menos en móvil)
        const targetCount = getEffectiveParticleCount();
        
        if (particles.length > targetCount) {
            particles = particles.slice(0, targetCount);
        } else if (particles.length < targetCount) {
            const particlesToAdd = targetCount - particles.length;
            for (let i = 0; i < particlesToAdd; i++) {
                const originalSpeed = {
                    vx: (Math.random() - 0.5) * props.config.particleSpeed,
                    vy: (Math.random() - 0.5) * props.config.particleSpeed
                };
                particles.push({
                    x: Math.random() * newWidth,
                    y: Math.random() * newHeight,
                    vx: originalSpeed.vx,
                    vy: originalSpeed.vy,
                    size: props.config.particleSize,
                    originalSpeed
                });
            }
        }
    };

    // Manejar resize con throttle para animación suave
    let isResizing = false;
    const handleResize = () => {
        if (isResizing) return;
        isResizing = true;

        // Usar requestAnimationFrame para sincronizar con el refresco de pantalla
        requestAnimationFrame(() => {
            updateCanvasSize();
            isResizing = false;
        });
    };

    // Inicializar ResizeObserver
    resizeObserver = new ResizeObserver(handleResize);
    const container = document.getElementById(props.containerId);
    if (container) {
        resizeObserver.observe(container);
    }

    // Cleanup del observer en unmount
    onUnmounted(() => {
        if (resizeObserver) {
            resizeObserver.disconnect();
        }
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
    });

    // Inicialización inicial
    updateCanvasSize();
    window.addEventListener('resize', handleResize);

    // Obtener contexto
    ctx = canvas.getContext('2d');

    // Eventos del mouse
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
};

// Dibujar partículas y conexiones
const draw = () => {
    if (!ctx || !particlesCanvas.value) return;
    const canvas = particlesCanvas.value;
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Crear buffer para conexiones
    const connections = [];

    // Actualizar partículas y recolectar conexiones
    particles.forEach((particle, i) => {
        // Mover partícula con velocidad adaptativa
        const speedFactor = Math.min(width, height) / 1000;
        particle.x += particle.vx * speedFactor;
        particle.y += particle.vy * speedFactor;

        // Rebote suave en los bordes
        if (particle.x < 0) {
            particle.x = 0;
            particle.vx *= -0.5;
        } else if (particle.x > width) {
            particle.x = width;
            particle.vx *= -0.5;
        }

        if (particle.y < 0) {
            particle.y = 0;
            particle.vy *= -0.5;
        } else if (particle.y > height) {
            particle.y = height;
            particle.vy *= -0.5;
        }

        // Efecto del mouse más suave
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radius = props.config.mouseMoveRadius * Math.min(width, height) / 1000;

            if (distance < radius) {
                const angle = Math.atan2(dy, dx);
                const force = (radius - distance) / radius;
                const pushX = Math.cos(angle) * force * 2;
                const pushY = Math.sin(angle) * force * 2;
                
                // Aplicar fuerza gradualmente
                particle.vx = particle.vx * 0.9 - pushX * 0.1;
                particle.vy = particle.vy * 0.9 - pushY * 0.1;
            }
        }

        // Recolectar conexiones
        for (let j = i + 1; j < particles.length; j++) {
            const otherParticle = particles[j];
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = props.config.lineDistance; // Distancia fija

            if (distance < maxDistance) {
                connections.push({
                    x1: particle.x,
                    y1: particle.y,
                    x2: otherParticle.x,
                    y2: otherParticle.y,
                    opacity: 1 - distance / maxDistance
                });
            }
        }
    });

        // Dibujar conexiones
    const settings = calculateParticleSettings(canvas.width, canvas.height);
    ctx.strokeStyle = props.config.lineColor;
    connections.forEach(conn => {
        ctx.beginPath();
        ctx.globalAlpha = Math.min(0.8, conn.opacity);
        ctx.lineWidth = 0.8; // Grosor fijo más delgado
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.stroke();
    });

    // Dibujar partículas
    ctx.globalAlpha = 1;
    ctx.fillStyle = props.config.particleColor;
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // Siguiente frame
    animationFrame = requestAnimationFrame(draw);
};

// Iniciar animación
onMounted(() => {
    initParticles();
    draw();
});

// Limpiar animación
onUnmounted(() => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
});
</script>
