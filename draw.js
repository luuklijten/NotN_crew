

let bubbles = [];



function setup () {
 createCanvas(600, 400);
}

function mousePressed() {
  for (let i = 0; i < 2; i++ ) {
      createbubble();
  }
}
function createbubble() {
    let r = 0;
    let b = new Bubble(mouseX, mouseY, r);

    bubbles.push(b);
}

/*var circle1 = {
  x: 200,
  y: 200,
  diameter: 0
};

var circle2 = {
  x: 200,
  y: 200,
  diameter: 200
};
*/
function draw(){
  //timer.html(frameCount);
  /*strokeWeight(2);
  stroke(200);
  noFill();
  ellipse(circle2.x, 200, 200, 200);
  */

  //timer.html(frameCount);
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();

  }

   /* strokeWeight(2);
  stroke(200);
  fill(250, 200, 200);
    ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);


    circle1.diameter = circle1.diameter + 1;*/
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  show() {
    //stroke(255);
    //strokeWeight(4);
    //noFill();
      fill(250, 200, 200);

    ellipse(this.x, this.y, this.r * 2);
    if(this.r < 100){
        this.r = this.r + 1;
    }
    fill(0);
    text(this.r, this.x-9, this.y+2);
    console.log(this.r);

  }
}
