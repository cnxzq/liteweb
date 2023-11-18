<template>
    <div class="h-full flex flex-col">
        <div class="p-2">
            显示区域
            left:<input class="w-20" v-model="args.viewBox[0]" type="number">
            top:<input class="w-20" v-model="args.viewBox[1]" type="number">
            width:<input class="w-20" v-model="args.viewBox[2]" type="number">
            height:<input class="w-20" v-model="args.viewBox[3]" type="number">
        </div>
        <ViewerBox is-debug :auto-scale="true" :scale="1" class="flex-1 h-0 overflow-hidden bg-gray/20" :view-box="args.viewBox">
            <div class="flex flex-col">
                <!--模拟在 -1000,-1000 生成内容-->
                <template v-for="i in 20">
                    <template v-for="j in 20">
                        <div class="shrink-0 absolute h-100px w-100px bg-gray/50 flex 
                    justify-center items-center border-1 border-solid box-border" :style="{
                        left: (i - 1) * 100 - 1000 + 'px',
                        top: (j - 1) * 100 - 1000 + 'px'
                    }">
                            {{ i }},{{ j }}
                        </div>
                    </template>
                </template>
            </div>
        </ViewerBox>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import ViewerBox from './ViewerBox.vue'

const args = reactive({
    viewBox: [0, 0, 1920, 1080] as [number, number, number, number]
})



</script>
