function savePhoto() {
    save("projectFilter.png");
}
function preload() {

}
function setup() {
    canvas=createCanvas(600,500);
    canvas.position(660,200);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video,0,0,600,500);
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        console.log("Nose X="+results[0].pose.nose.x);
        console.log("Nose Y="+results[0].pose.nose.y);
    }
}