<template>
    <div>
        <h1>边框</h1>
        <div class="flex flex-wrap gap-4">
            <div class="border-2 border-solid border-blue w-24 h-12">

            </div>
            <div class="border-2 border-dashed border-blue w-24 h-12">

            </div>

            <div class="box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    你好
                    你好
                    你好
                    你好
                    你好
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.box {
    position: relative;
    background: #111845a6;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 20px 50px rgb(23, 32, 90);
    border: 2px solid #2a3cad;
    color: white;
    padding: 20px;
}

.box:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
    pointer-events: none;
}

.box:hover:before {
    left: -50%;
    transform: skewX(-5deg);
}


.box .content {
    padding: 16px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);

}

.box span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;

}

.box span:nth-child(1) {
    transform: rotate(0deg);
}

.box span:nth-child(2) {
    transform: rotate(0deg);
}

.box span:nth-child(3) {
    transform: rotate(180deg);
}

.box span:nth-child(4) {
    transform: rotate(180deg);
}


.box span:before {
    content: '';
    position: absolute;
    background: #50dfdb;
    box-shadow: 0 30px 50px #50dfdb;
    --time:1s;
}
.box span:nth-child(1):before {
    width: 100%;
    height: 2px;
    animation: animate var(--time) linear infinite;
}

.box span:nth-child(2):before {
    width: 2px;
    height: 100%;
    animation: animate-v var(--time) linear infinite;
}

.box span:nth-child(3):before {
    width: 100%;
    height: 2px;
    animation: animate var(--time) linear infinite;
}

.box span:nth-child(4):before {
    width: 2px;
    height: 100%;
    animation: animate-v var(--time) linear infinite;
}

@keyframes animate {
    0% {
        transform: scaleX(0);
        transform-origin: left;
    }

    50% {
        transform: scaleX(1);
        transform-origin: left;
    }

    50.1% {
        transform: scaleX(1);
        transform-origin: right;

    }

    100% {
        transform: scaleX(0);
        transform-origin: right;

    }
}

@keyframes animate-v {
    0% {
        transform: scaleY(1);
        transform-origin: top;
    }

    50% {
        transform: scaleY(0);
        transform-origin: top;
    }

    50.1% {
        transform: scaleY(0);
        transform-origin: bottom;

    }

    100% {
        transform: scaleY(1);
        transform-origin: bottom;
    }
}</style>