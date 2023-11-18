<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-8 p-8">
        <css-doodle grid="1x35" click-to-update>
            :doodle {
                grid-row-gap: 1px;
                @size: 8em 12em;
            }
            transition: .2s ease @rand(500ms);
            background: #60569e;
            will-change: width;
            width: @rand(5%, 100%);
        </css-doodle>
        <css-doodle click-to-update>
            :doodle {
                @grid: 16 / 8em;
            }
            margin: -.5px;
            @random {
                border-top: 1px solid #60569e;
            }
            @random {
                border-left: 1px solid #60569e;
            }
            @random(.2) {
                :after {
                    content: '';
                    background: hsl(@rand(360), 60%, 70%);
                    @size: @rand(3px);
                }
            }
        </css-doodle>
        <css-doodle click-to-update>
            @grid: 1 / 100vw 100vh / #0a0c27;
                background-size: 200px 200px;
                background-image: @doodle(
                @grid: 6 / 100%;
                @size: 4px;
                font-size: 4px;
                color: hsl(@r240, 30%, 50%);
                box-shadow: @m3x5(
                    calc(4em - @nx*1em) @ny(*1em)
                    @p(@m3(currentColor), @m2(#0000)),
                    calc(2em + @nx*1em) @ny(*1em)
                    @lp
                );
            );
        </css-doodle>
        <css-doodle click-to-update>
            @grid: 1 / 42vmin;

            @content: @svg(viewBox: -50 -50 100 100;
                stroke-linecap: round;
                stroke: green;
                fill: none;

                --x: 14 * cos(π/6) * -1;
                --y: 14 * sin(π/6);

                g*6 {
                    transform: rotate(@n(*60));

                    path {
                        stroke-width: 4.2;
                        d: M $(x - 1) $y $(x - 1) $(-3.4y)
                    }

                    path {
                        stroke-width: 6;
                        d: M $x $(-3.4y) $(-x) $(-5.4y) A 22 22 0 0 1 $(-3.1x) $(-1.4y);
                    }
                }
            )
        </css-doodle>
        <css-doodle>
            @grid: 18 / 100vmax / #0a0c27;
            --hue: calc(180 + 1.5 * @x * @y);
            background: hsl(var(--hue), 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
                '0 0, 100% 0, 100% 100%',
                '0 0, 100% 0, 0 100%',
                '0 0, 100% 100%, 0 100%',
                '100% 0, 100% 100%, 0 100%'
            ));
        </css-doodle>
        <css-doodle click-to-update>
            @grid: 7 / 100vmax / #0a0c27;
            @shape: clover 5;
            background: hsla(-@i(*4), 70%, 68%, @r.8);
            transform:
                scale(@r(.2, 1.5))
                translate(@m2.@r(±50%));
        </css-doodle>
        <css-doodle grid="1x35" click-to-update>
            :doodle {
                grid-row-gap: 1px;
                @size: 8em 12em;
            }
            transition: .2s ease @rand(500ms);
            background: #6a5;
            will-change: width;
            width: @rand(5%, 100%);
        </css-doodle>
        <css-doodle click-to-update>
            @grid: 1 / 100vw 100vh / #0a0c27;
                background-size: 200px 200px;
                background-image: @doodle(
                @grid: 6 / 100%;
                @size: 4px;
                font-size: 4px;
                color: hsl(@r240, 30%, 50%);
                box-shadow: @m3x5(
                    calc(4em - @nx*1em) @ny(*1em)
                    @p(@m3(currentColor), @m2(#0000)),
                    calc(2em + @nx*1em) @ny(*1em)
                    @lp
                );
            );
        </css-doodle>
        <css-doodle click-to-update>
            @grid: 1 / 100vw 100vh / #125cde;
            @content: @Svg(
                viewBox: -50 -50 100 100 padding -20;
                circle*500 {
                    fill: hsl(@calc(120-90*@sin.n), 80%, 50%);
                    r: @sqrt(@n/60);
                    cx: @calc(@n*.618^4 * cos(2π*@n*.618));
                    cy: @calc(@n*.618^4 * sin(2π*@n*.618));
                }
            );
        </css-doodle>

    </div>

</template>

<style>

css-doodle{
    overflow:hidden;
    width:auto;
    height:auto;
}

</style>