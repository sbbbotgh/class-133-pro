statuss = "";
img = "";
obj = [];

function preload(){
    img = loadImage("park.jpg");
}

function setup(){
    canvas = createCanvas(500, 281);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    statuss = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
        obj = results;
    }
}

function draw(){
    canvas.center();
    image(img, 0, 0, 500, 281);
    if(statuss != ""){
        fill("#FF0000");
        for(i = 0; i < obj.length; i++){
            per = Math.floor(obj[i].confidence*100);
            text(obj[i].label + " " + per + "%", obj[i].x + 15, obj[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(obj[i].x , obj[i].y, obj[i].width, obj[i].height);
        }
        document.getElementById("status").innerHTML = "Status :  Object Detected";
        document.getElementById("objectss").innerHTML = " there are 6 major objects and it detect "+ obj.length + " objects";
    }
}


function back(){
    window.location = "index.html";
}