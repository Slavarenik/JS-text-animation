var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');

// var animateInterval = setInterval(animate, 80);

// ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
// ctx.fillRect(400, 100, 100, 100);
// ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
// ctx.fillRect(300, 300, 100, 100);
//
// // line
// ctx.beginPath();
//   ctx.moveTo(50, 300);
//   ctx.lineTo(300, 100);
//   ctx.lineTo(400, 300);
//   ctx.strokeStyle = "#fa34a3";
// ctx.stroke();


// ARC
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI*2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();
// function animate(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   for (var i = 0; i < 1000; i++){
//     var x = Math.random()*800;
//     var r = Math.round(Math.random()*255);
//     var g = Math.round(Math.random()*255);
//     var b = Math.round(Math.random()*255);
//     var y = Math.random()*800;
//     var rad = Math.random()*30;
//
//     console.log(r);
//     console.log(g);
//     console.log(b);
//     ctx.beginPath();
//     ctx.arc(x, y, rad, 0, Math.PI*2, false);
//     ctx.strokeStyle = 'rgba('+ r +',' + g +',' + b +', 1)';
//     ctx.stroke();
//   }
//
// }



function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = '#2E94E3';
    ctx.strokeStyle = '#fff';
    ctx.fill()
    ctx.stroke()
  }

  this.update = function() {
    if(this.x>canvas.width-this.radius || this.x-this.radius<0){
      this.dx = -this.dx;
    }
    if(this.y>canvas.height-this.radius || this.y-this.radius<0){
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var x = Math.random()*(canvas.width-radius*2) + radius,
      y = Math.random()*(canvas.height-radius*2) + radius,
      dx = Math.random() - 0.5 *5,
      dy = Math.random() - 0.5 *5,
      radius = 30;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
    console.log(i);
  }
}

animate();
