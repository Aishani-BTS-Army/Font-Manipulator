function setup() {
	video = createCapture(VIDEO);
	video.size(550, 500);

	canvas = createCanvas(550, 550);
	canvas.position(560,150);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function draw() {
	background('#969A97');
	textSize(difference);
	text("Hello World", 250, 250);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
	lw = results[0].pose.leftWrist.x;
	rw = results[0].pose.rightWrist.x;
	difference = floor(lw-rw);
  }
}