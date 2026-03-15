<template>
    <ParticlesBackground v-if="shouldLoad" v-bind="$attrs" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';

const ParticlesBackground = defineAsyncComponent(() => import('@/Components/ParticlesBackground.vue'));

const shouldLoad = ref(false);

onMounted(() => {
    if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => { shouldLoad.value = true; }, { timeout: 1200 });
    } else {
        setTimeout(() => { shouldLoad.value = true; }, 1200);
    }
});
</script>
