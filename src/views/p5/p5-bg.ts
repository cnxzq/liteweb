import p5 from 'p5'
import img_star from './star.png'

export const init = (canvas:HTMLElement) => {
    return new p5((sktech) => {

        let img2:any;
        let points:any;
        let p1:any, p2:any, x1:any, x2:any, m:any;
        let a:any, b:any, c:any, d:any,n:any;
        let a1:any, b1:any, c1:any, d1:any;
        let t1:any,mx:any,my:any,tmp:any,s:any;

        sktech.preload = function preload() {
            img2 = sktech.loadImage(img_star);
        }

        sktech.setup = function setup() {
            sktech.createCanvas(canvas.offsetWidth, canvas.offsetHeight);
            sktech.strokeWeight(0.25);
            sktech.angleMode(sktech.DEGREES);
            sktech.stroke(255);
            sktech.imageMode(sktech.CENTER);
            sktech.makeWave();
            p1 = {
                x: sktech.random(-sktech.width / 2.2, -sktech.width / 4),
                y: sktech.random(-sktech.width / 5, -sktech.width / 2)
            };
            p2 = {
                x: sktech.random(sktech.width / 3, sktech.width / 2.2),
                y: sktech.random(-sktech.width / 5, -sktech.width / 2.2)
            };
            x1 = -sktech.width / 2;
            x2 = sktech.width / 2;
            a1 = sktech.random(-100, 100);
            b1 = sktech.random(-90, 90);
            c1 = sktech.random(-90, 90);
            d1 = sktech.random(-120, 120);
            a = a1;
            b = b1;
            c = c1;
            d = d1;
        }

        sktech.draw = function draw() {
            sktech.background(0);
            sktech.translate(sktech.width / 2, sktech.height / 2);
            t1 = sktech.frameCount / 10;
            a = a1 + 30 * sktech.cos(t1 / 10);
            b = b1 - 30 * sktech.cos(t1 / 13);
            c = c1 + 50 * sktech.cos(t1 / 17);
            d = d1 - 50 * sktech.cos(t1 / 9);
            if (sktech.mouseIsPressed) {
                console.log(sktech.mouseX - sktech.width / 2, p1.x);
                mx = sktech.mouseX - sktech.width / 2;
                my = sktech.mouseY - sktech.width / 2;
                if (sktech.abs(mx - p1.x) < 20 && sktech.abs(my - p1.y) < 20) {
                    p1.x = sktech.mouseX - sktech.width / 2;
                    p1.y = sktech.mouseY - sktech.width / 2;
                }
                if (sktech.abs(mx - p2.x) < 20 && sktech.abs(my - p2.y) < 20) {
                    p2.x = sktech.mouseX - sktech.width / 2;
                    p2.y = sktech.mouseY - sktech.width / 2;
                }
            }
            m = (p1.y - p2.y) / (p1.x - p2.x);
            //sktech.image(img1, 0, 0, 800, 800);
            // image(img2, 0, 0, 400, 400);
            t1 = sktech.frameCount / 5 + 3;
            sktech.strokeWeight(2);
            //y -y1 = m(x-x1)
            sktech.line(x1, m * (x1 - p1.x) + p1.y, x2, m * (x2 - p1.x) + p1.y);
            sktech.image(img2, p1.x, p1.y, 100, 100);
            sktech.image(img2, p2.x, p2.y, 100, 100);
            sktech.strokeWeight(0.1);

            for (let i = 0; i < points.length; i++) {
                sktech.moveWave(points[i].x);
                sktech.image(img2, points[i].x, points[i].y, points[i].size, points[i].size);

                sktech.line(
                    x1,
                    m * (x1 - points[i].x) + points[i].y,
                    x2,
                    m * (x2 - points[i].x) + points[i].y
                );
            }
        }

        sktech.makeWave = function makeWave() {
            points = [];
            tmp = -sktech.width / 1.5;
            n = sktech.int(sktech.random(sktech.width / 20, sktech.width / 3));
            for (let i = 0; i < n; i++) {
                tmp = tmp + sktech.random(0, (sktech.width * 3) / n);
                if (i == sktech.int(n / 2)) {
                    s = 400;
                } else {
                    s = sktech.random(10, 50);
                }
                points[i] = {
                    x: tmp,
                    y: changeIt(tmp),
                    size: s
                };
            }
        }

        sktech.moveWave = function moveWave() {
            for (let i = 0; i < n; i++) {
                if (points[i].x < sktech.width / 1.8) {
                    points[i].x += sktech.randomGaussian(0.005, 0.003);
                    points[i].y = changeIt(points[i].x);
                } else {
                    points[i].x = -sktech.width / 1.8;
                    points[i].y = changeIt(points[i].x);
                }
            }
        }

        function changeIt(x:number) {
            return (
                a * sktech.sin(x) * sktech.cos(x) +
                b * sktech.sin(x / 2 - a) * sktech.tan(x / 4 + a) +
                c * sktech.sin(x / 5 - c) * sktech.cos(x / 2 - b) +
                d * sktech.tan(x / 5 - d) * sktech.sin(x / 10 - c) * sktech.tan(x / 2)
            );
        }

        sktech.keyPressed = function keyPressed() {
            sktech.setup();
            sktech.draw();
        }
    },canvas)
}
  
