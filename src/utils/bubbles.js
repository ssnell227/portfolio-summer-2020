

//bubble animation functions

export const bubbles = (canvas, c, circleArray, maxRadius, colorArray) => {
 function Circle (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.value = (.1 / this.radius) * 10000;


    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function () {


        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.y += this.dy;
        this.x += this.dx;


        this.draw();
    }
}



 const init = () => {

    circleArray = [];

    for (let i = 0; i < 50; i++) {
        var radius = Math.abs(Math.random() * 100);
        var x = Math.random() * (canvas.width - radius * 2) + radius;
        var y = Math.random() * (canvas.height - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

 const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

 const gameStart = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)
        init();
        animate();
}

//interactive
// const inCircle = (point, circle) => {
//     if (circle.radius > (Math.sqrt(Math.pow((point.x + .5 * window.innerWidth)-(circle.x + .5 * window.innerWidth), 2)
//     +Math.pow((point.y+20)-(circle.y +20), 2)))){
//         return true;
//     }
// }

gameStart()
}
