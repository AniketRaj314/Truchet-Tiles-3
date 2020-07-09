let screenSize, corners, size;
function setup() {
    screenSize = innerWidth < innerHeight - 4 ? innerWidth : innerHeight - 4;
    createCanvas(screenSize, screenSize);
    corners = [];
    size = 30;
    generateCorners();
}

function draw() {
    background(255, 255, 255, 15);
    fill(0);
    noStroke();
    drawTriangles();
    if(frameCount % 100 == 0) {
        corners = [];
        generateCorners();
    }
}

function generateCorners() {
    for(let x = 0; x < screenSize; x += size) {
        for(let y = 0; y < screenSize; y += size) {
            let arr = [createVector(x, y), createVector(x + size, y), createVector(x + size, y + size), createVector(x, y + size)];
            shuffle(arr, true);
            corners.push(arr)
        }
    }
}

function drawTriangles() {
    for(const corner of corners) {
        let x1 = corner[0].x;
        let y1 = corner[0].y;
        let x2 = corner[1].x;
        let y2 = corner[1].y;
        let x3 = corner[2].x;
        let y3 = corner[2].y;

        triangle(x1, y1, x2, y2, x3, y3);
    }
}