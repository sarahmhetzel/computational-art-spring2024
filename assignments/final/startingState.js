class Start{
    constructor(){
        subImg.resize(0, 900);

        //funSong.play();
    }
    draw(){
        background(0,0,0);

        colorMode(RGB, 100);

        webCam.loadPixels();
        for(let y = 0; y < webCam.height; y++){
            for(let x = 0; x < webCam.width; x++){
                let index = (x+y*webCam.width) * 4;
                let r = webCam.pixels[index];
                let g = webCam.pixels[index+1];
                let b = webCam.pixels[index+2];

                let alpha = 255;

                fill(r, g, b, alpha);
                let offsetX = map(x, 0, 40, 0, 2*PI);
                let posX = x * pixelDimension + cos(offsetX + frameCount * 0.1) * 2;
                let offsetY = map(y, 0, 28, 0, 2*PI);
                let posY = y * pixelDimension + sin(offsetY + frameCount * 0.1) * 2;
                rect(posX, posY, pixelDimension);
                
            }
        }
        image(subImg, 0, -75);
        fill(3, 202, 252, 20);
        rect(0, 0, width, height);
        textSize(32);
        fill(0, 0, 0);
        textFont('Courier New');
        text('welcome deep sea explorer', 30, 30);
        text('click to begin your journey', 30, 60);
    }
    mousePressed(){
        currentState = state1;

        funSong.pause();
    }
}