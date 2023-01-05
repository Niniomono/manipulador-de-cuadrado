noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(650, 500);
    canvas = createCanvas(750, 700);
    canvas.position(1170, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('¡PoseNet está inicializado!');
  }
function gotPoses(results) {
   if(results.length > 0) {
    console.log((results));
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+noseX+"noseY ="+ noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"difference"+difference);
   }
}
function draw() {
    background('rebeccapurple');
    document.getElementById("square_side").innerHTML = "el ancho y alto de el cuadrado es igual a "+difference+"pixeles";
    fill('blue');
    stroke('lightblue');
    square(noseX, noseY, difference);
}
