export default class Kirby {
  constructor(kirbyX, kirbyY) {
    this.kirbyX = kirbyX;
    this.kirbyY = kirbyY;
  }

  draw() {
    noStroke();
    push();
    fill(100, 100, 100);
    //legs
    square(kirbyX + 110 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 300 * s, s * 20);

    square(kirbyX + 230 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 300 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 300 * s, s * 20);

    square(kirbyX + 210 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 280 * s, s * 20);

    //upper part
    square(kirbyX + 170 * s, kirbyY + 100 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 100 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 100 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 100 * s, s * 20);

    //eyes
    square(kirbyX + 230 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 170 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 200 * s, s * 20);

    //left side
    square(kirbyX + 90 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 110 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 70 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 70 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 110 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 120 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 120 * s, s * 20);

    //right side
    square(kirbyX + 310 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 310 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 310 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 330 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 330 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 310 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 310 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 120 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 120 * s, s * 20);

    //body dark
    push();
    fill(239, 187, 204);
    square(kirbyX + 110 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 260 * s, s * 20);

    square(kirbyX + 150 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 220 * s, s * 20);

    square(kirbyX + 250 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 220 * s, s * 20);

    square(kirbyX + 310 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 110 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 160 * s, s * 20);

    square(kirbyX + 130 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 140 * s, s * 20);

    //body light
    push();
    fill(253, 221, 230);
    square(kirbyX + 130 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 260 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 240 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 240 * s, s * 20);

    square(kirbyX + 210 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 190 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 170 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 220 * s, s * 20);

    square(kirbyX + 110 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 90 * s, kirbyY + 220 * s, s * 20);

    square(kirbyX + 290 * s, kirbyY + 220 * s, s * 20);
    square(kirbyX + 310 * s, kirbyY + 220 * s, s * 20);

    square(kirbyX + 290 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 290 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 180 * s, s * 20);

    square(kirbyX + 110 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 200 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 200 * s, s * 20);

    square(kirbyX + 110 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 180 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 180 * s, s * 20);

    square(kirbyX + 130 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 160 * s, s * 20);

    square(kirbyX + 250 * s, kirbyY + 160 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 160 * s, s * 20);

    square(kirbyX + 250 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 140 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 140 * s, s * 20);

    square(kirbyX + 170 * s, kirbyY + 120 * s, s * 20);
    square(kirbyX + 190 * s, kirbyY + 120 * s, s * 20);
    square(kirbyX + 210 * s, kirbyY + 120 * s, s * 20);
    square(kirbyX + 230 * s, kirbyY + 120 * s, s * 20);

    push();
    fill(255, 40, 90);
    //feet
    square(kirbyX + 110 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 130 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 150 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 170 * s, kirbyY + 280 * s, s * 20);

    square(kirbyX + 230 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 250 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 270 * s, kirbyY + 280 * s, s * 20);
    square(kirbyX + 290 * s, kirbyY + 280 * s, s * 20);

    pop();
  }
}
