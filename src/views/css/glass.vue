<template>
    <div id="container">
        <div id="background">
            <img src="https://dss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/822.jpg?2" style="opacity:1"/>
            <img src="https://dss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/476.jpg?2" style="opacity:0.5"/>
            <img src="https://dss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/476.jpg?2" style="opacity:0.5"/>
            <img src="https://dss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/476.jpg?2" style="opacity:0.5"/>
        </div>
        <main style="transform:translateX(0px) translateY(50px) translateZ(100px) scale(0.9) rotateX(10deg) rotateY(10deg)">
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <span style="--blur:10.8px"></span>
            <div class="absolute z-2 left-1/2 top-1/2">
                你好你好你好你好你好你好你好你好你好
            </div>
        </main>
    </div>
</template>

<style scoped>

* {
    box-sizing: border-box
}

.main-title {
    text-align: center;
    bottom: 20px;
    width: -moz-fit-content;
    width: fit-content;
    margin: auto;
    text-shadow: 0 2px 40px #000;
    letter-spacing: -.02em;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.main-title,.main-title-bg {
    position: absolute;
    z-index: 100;
    left: 0;
    right: 0
}

.main-title-bg {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    -webkit-mask: linear-gradient(0deg,#000 20%,transparent);
    mask: linear-gradient(0deg,#000 20%,transparent);
    pointer-events: none;
    height: 240px;
    bottom: 0
}

h1 {
    font-weight: 600;
    font-size: 22px;
    font-size: min(3.5vw,22px);
    margin: 0;
    color: hsla(0,0%,100%,.9)
}

.main-title p {
    font-size: 14px;
    font-size: min(3vw,14px);
    margin: 10px 0 20px;
    font-weight: 400;
    color: hsla(0,0%,100%,.8)
}

.main-title a {
    color: inherit;
    text-decoration: underline;
    text-underline-position: from-font;
    text-decoration-thickness: from-font;
    -webkit-text-decoration-color: hsla(0,0%,100%,.4);
    text-decoration-color: hsla(0,0%,100%,.4)
}

.main-title a:hover {
    opacity: .6
}

#container {
    position: relative;
    margin: 0;
    perspective: 1000px;
    overflow: hidden
}

#background {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background-color: #fff
}

img {
    flex: 1 0 100%;
    width: auto;
    height: 110vh;
    object-fit: cover;
    object-position: center;
    scroll-snap-align: start;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-drag: none
}

img,main {
    pointer-events: none
}

main {
    position: fixed;
    width: 800px;
    height: 400px;
    aspect-ratio: 2/1;
    max-width: 80vw;
    max-height: 40vw;
    inset: 0;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 20px 40px 1px rgba(0,0,0,.12),inset 0 -10px 20px -5px rgba(0,0,0,.3),0 150px 100px -80px rgba(0,0,0,.4),inset 0 1px 4px hsla(0,0%,100%,.6),inset 0 -1px 1px 1px rgba(0,0,0,.2)
}

@media screen and (max-width: 600px) {
    .main-title,main {
        bottom:80px
    }

    .main-title-bg {
        height: 350px
    }
}

span {
    display: block;
    position: absolute;
    z-index: 1;
    inset: -40px;
    --offset: 50%;
    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));
    -webkit-mask-image: linear-gradient(to right,transparent calc(var(--x) - var(--offset)),#000 calc(var(--x) - var(--offset) / 2),#000 calc(var(--x) + var(--offset) / 2),transparent calc(var(--x) + var(--offset))),linear-gradient(to bottom,transparent 40px,#000 44px,#000 calc(100% - 44px),transparent calc(100% - 40px)),linear-gradient(to right,transparent 40px,#000 44px,#000 calc(100% - 44px),transparent calc(100% - 40px));
    -webkit-mask-composite: destination-in
}

.safari #container {
    perspective: 4000px
}

.safari span {
    inset: 1px;
    -webkit-mask-image: linear-gradient(to right,transparent calc(var(--x) - var(--offset)),#000 calc(var(--x) - var(--offset) / 2),#000 calc(var(--x) + var(--offset) / 2),transparent calc(var(--x) + var(--offset)));
    border-radius: 6px
}

span:first-of-type {
    --x: 11.11%
}

span:nth-of-type(2) {
    --x: 22.22%
}

span:nth-of-type(3) {
    --x: 33.33%
}

span:nth-of-type(4) {
    --x: 44.44%
}

span:nth-of-type(5) {
    --x: 55.55%
}

span:nth-of-type(6) {
    --x: 66.66%
}

span:nth-of-type(7) {
    --x: 77.77%
}

span:nth-of-type(8) {
    --x: 88.88%
}


</style>