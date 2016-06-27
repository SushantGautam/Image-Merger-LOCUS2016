function after(abc,  def){
    var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var imga = loadImage(abc, mainI);
var img2 = loadImage(def, mainI);
var imagesLoaded = 0;

function mainI() {
    imagesLoaded += 1;

    if(imagesLoaded == 2) {
        // composite now


        ctx.drawImage(imga, 0, 0);
        
        ctx.globalAlpha = 0.5;
        ctx.drawImage(img2, 0, 0);

        
    }
}

function loadImage(src, onload) {
    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
    var img = new Image();
    
    img.onload = onload;
    img.src = src;
    img.style.width = '200px';

    return img;
}

};
