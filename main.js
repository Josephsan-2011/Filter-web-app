noseX=0
noseY=0
leftEyeX=0
leftEyeY=0
rightEye=0
function preload() {
    hat=loadImage("https://i.postimg.cc/6pgvm0ZC/1486189.png")
    beard=loadImage("https://i.postimg.cc/nhGPpXHR/Nice-Png-beard-png-59256.png")
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,JosephS)
    poseNet.on('pose',allpoint)
}
function allpoint(result) {
    if (result.length>0) {
        
    
    console.log(result)
    console.log("nose x="+result[0].pose.nose.x)
    console.log("nose y="+result[0].pose.nose.y)
    noseX=result[0].pose.nose.x
    noseY=result[0].pose.nose.y
    leftEyeX=result[0].pose.leftEye.x
    leftEyeY=result[0].pose.leftEye.y

    }
}
function draw() {
    image(video,0,0,300,300)
    fill("blue")
    stroke("red")
    //circle(leftEyeX,leftEyeY,20)
    image(hat,leftEyeX-80,leftEyeY-150,150,70)
    image(beard,noseX-40,noseY-40,80,130)
}
function take_snapshot() {
    save("filter.png")
}
function JosephS() {
    console.log("model-loaded")
}