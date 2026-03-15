<template>
    <div class="relative" :class="[isModal ? 'h-full' : 'aspect-[16/9]']">
        <div class="relative h-full overflow-hidden rounded-lg bg-gray-900">
            <div 
                class="flex h-full transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
                <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="w-full flex-shrink-0 h-full"
                >
                    <div class="relative w-full h-full">
                        <div 
                            v-if="!isImageLoaded(index)"
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <svg 
                                class="animate-spin h-8 w-8 text-primary" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <circle 
                                    class="opacity-25" 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    stroke="currentColor" 
                                    stroke-width="4"
                                ></circle>
                                <path 
                                    class="opacity-75" 
                                    fill="currentColor" 
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>
                        
                        <img 
                            :src="image" 
                            :alt="`${projectTitle} - Imagen ${index + 1}`"
                            class="absolute inset-0 w-full h-full object-cover"
                            @load="handleImageLoad($event, index)"
                            @error="handleImageError($event, index)"
                        />
                    </div>
                </div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                    <h3 class="text-white font-semibold text-lg">{{ projectTitle }}</h3>
                    <p v-if="images.length > 1" class="text-gray-200 text-sm">{{ currentIndex + 1 }} de {{ images.length }} imágenes</p>
                </div>
            </div>

            <button 
                v-if="images.length > 1"
                @click.stop="previousImage"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-20"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button 
                v-if="images.length > 1"
                @click.stop="nextImage"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-20"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div 
                v-if="images.length > 1"
                class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
            >
                <button 
                    v-for="(image, index) in images" 
                    :key="index"
                    @click.stop="goToImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-200 cursor-pointer"
                    :class="currentIndex === index ? 'bg-primary scale-110' : 'bg-white/50 hover:bg-white/75 hover:scale-110'"
                ></button>
            </div>
        </div>

        <div 
            class="absolute inset-0"
            @keydown.left="previousImage"
            @keydown.right="nextImage"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            tabindex="0"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    projectTitle: {
        type: String,
        required: true
    },
    autoPlay: {
        type: Boolean,
        default: true
    },
    interval: {
        type: Number,
        default: 5000
    },
    isHovered: {
        type: Boolean,
        default: false
    },
    isModal: {
        type: Boolean,
        default: false
    }
});

const currentIndex = ref(0);
let autoPlayInterval = null;
let touchStartX = 0;
let touchEndX = 0;
const loadedImages = ref([]);

const isImageLoaded = (index) => {
    return loadedImages.value.includes(index);
};

const nextImage = () => {
    if (props.images.length <= 1) return;
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const previousImage = () => {
    if (props.images.length <= 1) return;
    currentIndex.value = currentIndex.value === 0 
        ? props.images.length - 1 
        : currentIndex.value - 1;
};

const goToImage = (index) => {
    if (props.images.length <= 1) return;
    currentIndex.value = index;
};

const startAutoPlay = () => {
    if (props.autoPlay && props.images.length > 1) {
        stopAutoPlay(); // Limpiamos cualquier intervalo existente
        autoPlayInterval = setInterval(nextImage, props.interval);
    }
};

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
};

const handleImageLoad = (event, index) => {
    if (!loadedImages.value.includes(index)) {
        loadedImages.value.push(index);
    }
};

const handleImageError = (event, index) => {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjM0E0MDU1Ii8+CjxwYXRoIGQ9Ik00MDAgMjAwQzQ0MS40IDIwMCA0NzUgMjMzLjYgNDc1IDI3NUM0NzUgMzE2LjQgNDQxLjQgMzUwIDQwMCAzNTBDMzU4LjYgMzUwIDMyNSAzMTYuNCAzMjUgMjc1QzMyNSAyMzMuNiAzNTguNiAyMDAgNDAwIDIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTQwMCA0MDBDNDQxLjQgNDAwIDQ3NSA0MzMuNiA0NzUgNDc1QzQ3NSA1MTYuNCA0NDEuNCA1NTAgNDAwIDU1MEMzNTguNiA1NTAgMzI1IDUxNi40IDMyNSA0NzVDMzI1IDQzMy42IDM1OC42IDQwMCA0MDAgNDAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
    if (!loadedImages.value.includes(index)) {
        loadedImages.value.push(index);
    }
};

const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
};

const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextImage();
        } else {
            previousImage();
        }
    }
};

watch(() => props.isHovered, (newValue) => {
    if (newValue) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
});

onMounted(() => {
    loadedImages.value = [];
});

onUnmounted(() => {
    stopAutoPlay();
});
</script>