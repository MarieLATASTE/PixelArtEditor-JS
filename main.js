var penColour = '#000';

function setPixelColour(pixel){
    pixel.style.backgroundColor = penColour;
}

function setPenColour(pen){
    penColour = pen;
}

var childDivs = document.getElementById("art").getElementsByTagName("div");

function resetGrid(){
    for(i = 0; i < childDivs.length; i++){
        childDivs[i].style.backgroundColor = '#f1f1f1';
    }
}