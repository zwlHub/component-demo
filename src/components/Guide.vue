<template>
    <div class="">
        {{ top }}
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, onBeforeMount, computed } from 'vue'
const gdProp = defineProps([
    'top',
    'left',
    'tip',
    'guideData'
])
console.log('top',gdProp.top)
</script>
<style>
</style>