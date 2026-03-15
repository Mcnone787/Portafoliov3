<template>
    <div 
        :id="containerId" 
        class="absolute inset-0 z-0"
        :style="{ opacity }"
    >
        <canvas class="absolute inset-0 w-full h-full"></canvas>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    containerId: {
        type: String,
        required: true
    },
    opacity: {
        type: Number,
        default: 0.6
    },
    config: {
        type: Object,
        default: () => ({})
    }
});

let particles = null;

const initParticles = () => {
    const canvas = document.querySelector(`#${props.containerId} canvas`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particleArray = [];
    
    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = 'rgb(14 136 168)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const init = () => {
        for (let i = 0; i < 50; i++) {
            particleArray.push(new Particle());
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
            particleArray[i].draw();
            
            for (let j = i; j < particleArray.length; j++) {
                const dx = particleArray[i].x - particleArray[j].x;
                const dy = particleArray[i].y - particleArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(14, 136, 168, ${0.2 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particleArray[i].x, particleArray[i].y);
                    ctx.lineTo(particleArray[j].x, particleArray[j].y);
                    ctx.stroke();
                }
            }
        }
        
        particles = requestAnimationFrame(animate);
    };

    init();
    animate();
};

const cleanup = () => {
    if (particles) {
        cancelAnimationFrame(particles);
        particles = null;
    }
};

onMounted(() => {
    initParticles();
});

onBeforeUnmount(() => {
    cleanup();
});
</script>
