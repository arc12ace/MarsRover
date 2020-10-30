var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var images=["Mars 1.jpg", "Mars 4.jpg", "Mars 5.jpg", "Mars 6.jpg", "mars.jpg"]
var x=Math.floor(Math.random()*5)
var rover_x=10
var rover_y=10
var rover_width=100
var rover_height=100
var background=images[x]
var rover="rover.png"

function add(){
    canvas_bg=new Image();
    canvas_bg.onload=uploadBackground;
    canvas_bg.src=background;

    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover;
}
function uploadBackground(){
    ctx.drawImage(canvas_bg, 0, 0, canvas.width, canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height )
}
window.addEventListener("keydown", keydown);

function keydown(e){
    var keynumber=e.keyCode;
    console.log(keynumber);
    if(keynumber==37){
        left();
        console.log("left");
    }
    if(keynumber==38){
        up();
        console.log("up");
    }
    if(keynumber==39){
        right();
        console.log("right");
    }
    if(keynumber==40){
        down();
        console.log("down");
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
        console.log("Rover_y= ", rover_y)
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground;
        uploadRover;
        console.log("Rover_y= ", rover_y)
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground;
        uploadRover;
        console.log("Rover_x= ", rover_x)
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground;
        uploadRover;
        console.log("Rover_x= ", rover_x)
    }
}
