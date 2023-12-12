<template>
    <div class="text-12 flex justify-center items-center">
        <AnimNumber1 :value="value"></AnimNumber1>
    </div>
</template>

<script setup lang="ts">

import AnimNumber1 from '@/components/number/AnimNumber1.vue'
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core'

const value = ref(0)

useIntervalFn(()=>value.value = (Math.random()*10000),2000)

</script>