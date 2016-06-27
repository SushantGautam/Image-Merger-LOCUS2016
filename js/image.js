var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img1 = loadImage('https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13394055_1229952907022567_5805854603689169973_n.jpg?oh=b4ccaabfee3e9056b167efc0b12f2f15&oe=5801442E', main);
var img2 = loadImage('https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/10441151_946752332033550_1270371410156191202_n.jpg?oh=892b7d30aeebc247864651945db960b7&oe=57F83140', main);

var imagesLoaded = 0;

function main() {
    imagesLoaded += 1;

    if(imagesLoaded == 2) {
        // composite now

        img1.style.width = '200px'
        img1.style.height = 'auto'

        ctx.drawImage(img1, 0, 0);
        
        ctx.globalAlpha = 0.5;
        ctx.drawImage(img2, 0, 0);
    }
}

function loadImage(src, onload) {
    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
    var img = new Image();
    
    img.onload = onload;
    img.src = src;

    return img;
}


