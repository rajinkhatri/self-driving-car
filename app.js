const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;  // for the full height of the windows//
    car.draw(ctx); // takes value from car and uses context from ctx to draw it //
    requestAnimationFrame(animate);
}