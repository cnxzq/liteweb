<template>
    <div class="flex justify-start items-start content-start p-2 gap-2 bg-black">
        
        <h1>SVG Vue</h1>
        <div>
            <SvgBorder1></SvgBorder1>
        </div>
        <div>
            <SvgBorder1 class="h-10 w-10"></SvgBorder1>
        </div>
        <div>
            <SvgBorder2 style="width:100px"></SvgBorder2>
        </div>
    </div>
</template>

<script setup lang="ts">

import SvgBorder1 from './border1.svg'
import SvgBorder2 from '../../assets/vue.svg'

</script>