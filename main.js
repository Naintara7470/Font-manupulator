noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,110);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    
    
}
function draw(){
    background("#0000ff");
    document.getElementById("square_sides").innerHTML = "Width and Height of a square will be = "+ difference + "px";
    fill('#00ffbf');
    stroke( '#000000');
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("Pose net is intialized")
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("leftWristX = " + leftWristX + "rightWristX = " + "difference = " + difference);
    }
} 