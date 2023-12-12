<template>
    <div ref="canvas"></div>
</template>

<script setup lang="ts">

import {onMounted,ref} from 'vue'
import {init} from './p5-bg'

const canvas = ref<HTMLElement>()
onMounted(()=>{
    if(canvas.value){
        const p5 = init(canvas.value)

        console.log('实例',p5);
    }
})

</script>