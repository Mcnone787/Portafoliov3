<template>
    <nav class="fixed left-4 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 z-50 hidden 2xl:block">
        <div class="flex flex-col relative">
            <!-- Navigation Items Container -->
            <div class="relative">
                <!-- Background Line (static) -->
                <div 
                    class="absolute left-[7px] w-0.5 bg-white/30"
                    :style="{
                        top: '7px',
                        height: 'calc(100% - 14px)'
                    }"
                ></div>
                
                <!-- Progress Line (dynamic) -->
                <div 
                    ref="progressLine"
                    class="absolute left-[7px] top-[7px] w-0.5 bg-primary origin-top transition-transform duration-300 ease-out"
                    :style="{ 
                        height: getTotalLineHeight() + 'px',
                        transform: `scaleY(${getProgressScale()})`
                    }"
                ></div>

                <!-- Navigation Items -->
                <div class="space-y-8">
                    <div 
                        v-for="(item, index) in navigation" 
                        :key="item.id"
                        @click="$emit('navigate', item.id)"
                        class="group flex items-center cursor-pointer"
                    >
                        <!-- Dot Container -->
                        <div class="relative">
                            <div 
                                class="nav-dot w-4 h-4 rounded-full border-2 transition-all duration-300 ease-out"
                                :class="getDotClass(item.id, index)"
                            ></div>
                        </div>
                        
                        <!-- Section Icon and Name -->
                        <div class="flex items-center mt-1">
                       
                            <span 
                                class="ml-3 text-sm font-medium transition-colors duration-300 ease-out"
                                :class="[
                                    activeSection === item.id 
                                        ? 'text-primary' 
                                        : 'text-gray-400'
                                ]"
                            >
                                {{ item.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
import { 
    CodeBracketIcon, 
    UserIcon, 
    WrenchScrewdriverIcon, 
    EnvelopeIcon, 
    HomeIcon 
} from '@heroicons/vue/24/outline';

const {
    activeSection,
    navigation,
    getTotalLineHeight,
    getProgressScale,
    getDotClass
} = useNavigation();

defineEmits(['navigate']);
</script>