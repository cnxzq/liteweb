<template>
    <button @click="router.go(-1)">返回</button>
    <router-link to="/main">主页</router-link>
    storage
    {{wtop}}
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {useStorage} from '@vueuse/core'
import {useRoute,useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();

const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello' })

const wtop = ref(window.screenX)

onMounted(()=>{
    window.addEventListener('resize',()=>{
        wtop.value = window.screenX
    })
    window.addEventListener('drage',()=>{
        wtop.value = window.screenX
    })
})

</script>