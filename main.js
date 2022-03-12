function preload() {
    
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
    }
}
function draw() {
    image(video,0,0,300,300)
}
function take_snapshot() {
    save("filter.png")
}
function JosephS() {
    console.log("model-loaded")
}