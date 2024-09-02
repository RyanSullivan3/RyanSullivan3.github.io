var x = 200;
var y = 200;
var unitcirclex = random(200 - 200 * cos(x), 200 + 200 * cos(x));
var unitcircley = random(200 - 200 * sin(y), 200 + 200 * sin(y));

function setup() {
    createCanvas(800, 600);
    background(0, 0, 0);
    frameRate(650);
}

function draw() {
    var choice = floor(random(1, 10));
    if (choice === 1) {
        var x1 = (unitcirclex + 200 + 200 * cos(0)) / 2;
        var y1 = (unitcircley + 200 + 200 * sin(0)) / 2;
        point(x1, y1);
        unitcirclex = x1;
        unitcircley = y1;
    } else if (choice === 2) {
        var x1 = (unitcirclex + 200 + 200 * cos(72)) / 2;
        var y1 = (unitcircley + 200 + 200 * sin(72)) / 2;
        point(x1, y1);
        unitcirclex = x1;
        unitcircley = y1;
    } else if (choice === 3) {
        var x1 = (unitcirclex + 200 + 200 * cos(144)) / 2;
        var y1 = (unitcircley + 200 + 200 * sin(144)) / 2;
        point(x1, y1);
        unitcirclex = x1;
        unitcircley = y1;
    } else if (choice === 4) {
        var x1 = (unitcirclex + 200 + 200 * cos(216)) / 2;
        var y1 = (unitcircley + 200 + 200 * sin(216)) / 2;
        point(x1, y1);
        unitcirclex = x1;
        unitcircley = y1;
    } else if (choice === 5) {
        var x1 = (unitcirclex + 200 + 200 * cos(288)) / 2;
        var y1 = (unitcircley + 200 + 200 * sin(288)) / 2;
        point(x1, y1);
        unitcirclex = x1;
        unitcircley = y1;
    }
    stroke(117 * choice / 5, 29 * choice / 5, 57 * choice / 5);
    strokeWeight(5 * (1 + choice / 27));
}

