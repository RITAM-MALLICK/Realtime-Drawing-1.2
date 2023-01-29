function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('Pose',gotPoses);
}

function draw() {
    background('#1BA3C8');
}

function modelLoaded() {
    console.log("Pose net is initialised");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}