<template>
    <div ref="canvas"></div>
</template>

<script setup lang="ts">

import {onMounted,ref} from 'vue'
import {init} from './p5-bg'

const canvas = ref<HTMLElement>()
onMounted(()=>{
    canvas.value&& init(canvas.value)
})

</script>