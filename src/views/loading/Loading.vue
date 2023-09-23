<template>
    <div>
        <div class="w-200px h-200px flex justify-center items-center">
            <div class="loading">
                <div v-for="i in 36" class="dot"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

$ballSize:10px;
$containerSize:150px;
$n:36;
$d:4s;
$pDeg:calc(360deg/$n);
.loading{
    width:$containerSize;
    height: $containerSize;
    margin:50px auto;
    position: relative;
    border-radius: 50%;
    user-select: none;

    .dot{
        position: absolute;
        left:50%;
        top:0;
        width:$ballSize;
        height: $ballSize;
        margin-left: calc(-1 * $ballSize / 2);
        margin-top: calc(-1 * $ballSize / 2);
        
        transform-origin: center calc($containerSize / 2 + $ballSize / 2);

        /**景深 */
        perspective: 70px;
        transform-style: preserve-3d;
        
        @for $i from 1 through $n{
            &:nth-child(#{$i}){
                transform: rotate($pDeg*calc( $i - 1 ));
                &::before,&::after{
                    animation-delay: -1 * calc($d / $n) * ($i - 1) * 6;
                }
            }
        }

        &::before,&::after{
            content: '';
            position: absolute;
            width:100%;
            height:100%;
            border-radius: 50%;
        }
        &::before{
            background: #666;
            top:-100%;
            animation: rotation-black $d infinite;
            
            @keyframes rotation-black {
                0%{
                    animation-timing-function: ease-in;
                }
                25%{
                    transform: translate3d(0,100%,$ballSize);
                    animation-timing-function: ease-out;
                }
                50%{
                    transform: translate3d(0,200%,0);
                    animation-timing-function: ease-in;
                }
                75%{
                    transform: translate3d(0,100%,-$ballSize);
                    animation-timing-function: ease-out;
                }
            }
        }
        
        &::after{
            background: #fff;
            top:100%;
            animation: rotation-white $d infinite;
            
            @keyframes rotation-white {
                0%{
                    animation-timing-function: ease-in;
                }
                25%{
                    transform: translate3d(0,-100%,-$ballSize);
                    animation-timing-function: ease-out;
                }
                50%{
                    transform: translate3d(0,-200%,0);
                    animation-timing-function: ease-in;
                }
                75%{
                    transform: translate3d(0,-100%,$ballSize);
                    animation-timing-function: ease-out;
                }
            }
        }
    }
}

</style>