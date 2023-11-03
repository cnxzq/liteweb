<template>
    <!-- 最外层容器 * scale-->
    <div ref="rootRef" class="relative flex justify-center items-center">
        <!-- 缩放层 -->
        <div class="relative overflow-hidden bg-gray/50" :style="{
            width: viewBox[2] * currentScale + 'px',
            height:viewBox[3] * currentScale + 'px',
        }" style="transition:height 1s,width 1s;">
            <div ref="el" 
                class="absolute bg-gray/50"
                style="transform-origin: 0 0; transition:transform 1s;"
                :style="{
                    transform: `scale(${currentScale}) translate(${-viewBox[0]}px, ${-viewBox[1]}px)`
                }">
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue';
import { onMounted } from 'vue';
import { Ref, computed, ref } from 'vue';

const props = withDefaults(defineProps<{
    autoScale?: boolean,
    isDebug?: boolean,
    viewBox?: [number, number, number, number],
    scale?: number
}>(), {
    autoScale: false,
    isDebug: false,
    viewBox: () => [0, 0, 1920, 1080],
    scale: 1
})

const rootRef:Ref<HTMLElement|undefined> = ref()
const rootHeight = ref(0)
const rootWidth = ref(0)

let observer:IntersectionObserver;
let resizeObserver:ResizeObserver;

const resizeRoot = ()=>{
    if(rootRef.value){
        rootHeight.value = rootRef.value.offsetHeight
        rootWidth.value = rootRef.value.offsetWidth
    }
}
onMounted(()=>{
    if(props.autoScale && rootRef.value){
        observer = new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting && resizeRoot()));
        observer.observe(rootRef.value);
        resizeObserver = new ResizeObserver(resizeRoot);
        resizeObserver.observe(rootRef.value);
    }
})

onUnmounted(()=>{
    observer.disconnect();
    resizeObserver.disconnect();
})


const currentScale = computed(()=>{
    if(!props.autoScale){
        return props.scale;
    }
    const offsetWidth = rootWidth.value;
    const offsetHeight = rootHeight.value;

    const [left,top,width,height] = props.viewBox;
    if(offsetHeight && offsetWidth){
        const bh = offsetHeight/height;
        const bw = offsetWidth/width;
        return Math.min(bh,bw);
    }
    return 1;
})
</script>