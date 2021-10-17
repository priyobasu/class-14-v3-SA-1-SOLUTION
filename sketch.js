var ball={
  x:200,
  y:200,
  r:50,
  xSpeed:0,
  ySpeed:0,
  color:["red","green","blue","purple"]

}


function setup() {
  createCanvas(400, 400);


  
}

function draw() {
  background(220);

  fill(ball.color[1]);
  ellipse(ball.x,ball.y,ball.r,ball.r);
  ball.xSpeed=1;
  ball.x=ball.x+ball.xSpeed
}