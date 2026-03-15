<template>
    <div class="relative flex items-center justify-center h-[240px] sm:h-[320px] md:h-[400px] group">
        <div class="w-full h-full overflow-hidden">
            <div 
                class="flex h-full transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
                <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="w-full flex-shrink-0 flex items-center justify-center px-8"
                >
                    <div class="relative">
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
                            class="w-[1100px] h-auto max-h-[400px] object-contain rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02] brightness-[0.95] contrast-[1.02]"
                            @load="handleImageLoad($event, index)"
                            @error="handleImageError($event, index)"
                        />
                        <div class="absolute inset-0 bg-black/5 rounded-lg pointer-events-none"></div>
                    </div>
                </div>
            </div>
            <button 
                v-if="images.length > 1"
                type="button"
                @click.stop="previousImage"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 text-white/90 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button 
                v-if="images.length > 1"
                type="button"
                @click.stop="nextImage"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 text-white/90 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Imagen siguiente"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div 
                v-if="images.length > 1"
                class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
                <button 
                    v-for="(image, index) in images" 
                    :key="index"
                    @click.stop="goToImage(index)"
                    class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                    :class="currentIndex === index ? 'bg-primary scale-110 ring-2 ring-primary border border-white/20' : 'bg-white/50 hover:bg-white/70 hover:scale-110 border border-white/20'"
                ></button>
            </div>
        </div>
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
    }
});

const currentIndex = ref(0);
let autoPlayInterval = null;
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
        stopAutoPlay();
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

onMounted(() => {
    loadedImages.value = [];
    startAutoPlay();
});

onUnmounted(() => {
    stopAutoPlay();
});
</script>