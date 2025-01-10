
ellipses = [
    [200, 200, 195, 195],
    [200, 275, 50, 75],
    [150, 125, 30, 25],
    [250, 125, 30, 25],
];

const canvas = document.getElementById("ellipse-drawing-1");
const ctx = canvas.getContext("2d");

if (!ctx) {
    console.error("Canvas context not found!");
} else {
    console.log("Canvas context initialized.");
}

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

for (let e of ellipses) {
    var posx = e[0];
    var posy = e[1];
    var lenx = e[2];
    var leny = e[3];

    ctx.beginPath();
    ctx.ellipse(posx, posy, lenx, leny, 0, 0, Math.PI*2); // final 3 variables are rotation, startAngle, and EndAngle
    ctx.stroke();
}
