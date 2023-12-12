<template>
    {{ tweened.number.toFixed(0) }}
</template>

<script setup lang="ts">

import { reactive, watch } from 'vue'
import gsap from 'gsap'
import { onMounted } from 'vue';

const props = withDefaults(defineProps<{
    value?:number|string
}>(),{});

const tweened = reactive({
    number: 0
})

watch(()=>[props.value], (n) => {
    setDisplayValue(props.value);
})

onMounted(()=>{
    setDisplayValue(props.value);
})

const setDisplayValue = (v?:number|string)=>{
    gsap.to(tweened, { duration: 0.5, number: v&&Number(v) || 0 })
}

</script>