<template>
    <div ref="canvas"></div>
</template>

<script setup lang="ts">

import {onMounted,ref} from 'vue'
import {init} from './p5-bg'
import { onUnmounted } from 'vue';

const canvas = ref<HTMLElement>();
let app:ReturnType<typeof init>|null = null;
onMounted(()=>{
    app = init(canvas.value!)
})

onUnmounted(()=>{
    app?.destory();
})

</script>