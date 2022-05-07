function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(100, 100, 100);
    circle(500, 100, 100);
    circle(100, 200, 100);
    circle(100, 300, 100);
    circle(100, 400, 100);
    circle(500, 200, 100);
    circle(500, 300, 100);
    circle(500, 400, 100);
}

function take_snapshot() {
    save("stundent_name.png");
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}