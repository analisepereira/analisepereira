document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('keydown', function(e) {
        if(e.code === 'Space') {
            e.preventDefault();
        }
    });

    let ballX;
    let ballY;
    const ballSize = 15;
    let ballVelocityY = 0;
    const gravity = 0.6;
    const jumpStrength = -10;
    let isJumping = false;
    let bgColor = [40, 60, 100]; 
    let isDaytime = false;

    function setup() {
        let canvas = createCanvas(700, 500);
        canvas.parent('sketch-holder');
        ballX = width / 2;
        ballY = height * 0.78;
        drawScene();
    }

    function draw() {
        if (mouseIsPressed && isMouseOverBall() || isJumping) {
            updateBall();
            drawScene();
        }
    }
     
    function mousePressed() {
        if (isMouseOverBall()) {
            ballX -= 10;
            ballX = max(ballX, ballSize / 2);
        }
    }

    function keyPressed() {
        if (key === ' ' && !isJumping) {
            ballVelocityY = jumpStrength;
            isJumping = true;
        }
        if (keyCode === UP_ARROW) {
            bgColor = [135, 206, 235]; 
            isDaytime = true;
            drawScene();
        }
    }
     
    function updateBall() {
        if (isJumping) {
            ballY += ballVelocityY;
            ballVelocityY += gravity;
            if (ballY >= height * 0.78) {
                ballY = height * 0.78;
                ballVelocityY = 0;
                isJumping = false;
            }
        }
    }

    function isMouseOverBall() {
        let d = dist(mouseX, mouseY, ballX, ballY);
        return d < ballSize / 2;
    }

    function drawScene() {
        background(bgColor);
        
        if (isDaytime) {
            drawSun();
        }
        
        drawMountains(5);

        for (let i = 0; i < 100; i++) {
            let x = random(width);
            let y = random(height);
            let size = random(1, 3);
            fill(255, 255, 255);
            noStroke();
            ellipse(x, y, size, size);
        }
        
        drawBushes(10);
        
        fill(60, 80, 0); 
        noStroke();
        rect(0, height * 0.8, width, height * 0.1);
        
        fill(0, 0, 0);
        noStroke();
        rect(0, height * 0.9, width, height * 0.3);
        
        drawStreetLamp(40);
    }

    function drawSun() {
        fill(255, 180 , 0);
        noStroke();
        ellipse(width - 50, 50, 80, 80);
        
        stroke(255, 180, 0);
        strokeWeight(3);
        for (let i = 0; i < 8; i++) {
            let angle = i * PI / 4;
            let x1 = width - 50 + cos(angle) * 50;
            let y1 = 50 + sin(angle) * 50;
            let x2 = width - 50 + cos(angle) * 70;
            let y2 = 50 + sin(angle) * 70;
            line(x1, y1, x2, y2);
        }
    }

    function drawMountains(numMountains) {
        fill(30, 30, 50);
        noStroke();
        for (let i = 0; i < numMountains; i++) {
            let x = random(0, width);
            let mountainHeight = random(80, 400);
            let mountainWidth = random(150, 300);
            let mountainX = x - mountainWidth / 2;
            triangle(
                mountainX, height * 0.8,
                mountainX + mountainWidth, height * 0.8,
                x, height * 0.8 - mountainHeight
            );
        }
    } 

    function drawBushes(numBushes) {
        noStroke();
        
        for (let i = 0; i < numBushes; i++) {
            let x = random(width);
            let y = height * 0.8; 
            let bushSize = random(60, 150);
            fill(random(50, 100), random(70, 120), random(70, 120));
            
            for (let j = 0; j < 5; j++) {
                let offsetX = random(-bushSize / 2, bushSize / 2);
                let offsetY = random(-bushSize / 4, bushSize / 4);
                ellipse(x + offsetX, y - offsetY, bushSize, bushSize * 0.5);
            }
        }
    }

    function drawStreetLamp(x) {
        fill(150);
        rect(x-5, height * 0.25, 10, height * 0.55);
        
        fill(255, 220, 100, 100);
        ellipse(x, height * 0.25, 50, 20);
        
        fill(255, 220, 100);
        ellipse(x, height * 0.25, 30, 10);
        
        fill(255, 0, 0);
        noStroke();
        ellipse(ballX, ballY, ballSize, ballSize);
        
        fill(255, 220, 100, 100);
        triangle(
            x + 100, height * 0.8,
            x + 400, height * 0.8,
            x, height * 0.25
        );
    }

    window.setup = setup;
    window.draw = draw;
    window.mousePressed = mousePressed;
    window.keyPressed = keyPressed;
});