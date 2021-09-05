var hours,minutes,seconds
var hrangle,mangle,seangle




function setup() {
  createCanvas(800,400);


angleMode(DEGREES)
}


function draw() {
background("black");  

translate(400,200);
rotate(-90);

hours=hour()
minutes=minute()
seconds=second()

seangle=map(seconds,0,60,0,360)
mangle=map(minutes,0,60,0,360)
hrangle=map(hours%12,0,12,0,360)

push()
rotate(hrangle)
stroke("blue")
strokeWeight(8)
line(0,0,50,0)
pop()

push()
rotate(seangle)
stroke("green")
strokeWeight(5)
line(0,0,100,0)
pop()

push()
rotate(mangle)
stroke("red")
strokeWeight(7)
line(0,0,75,0)
pop()

stroke("yellow")
point(0,0)

strokeWeight(10)
noFill()
stroke("green")
arc(0,0,300,300,0,seangle)

stroke("red")
arc(0,0,280,280,0,mangle)

stroke("blue")
arc(0,0,260,260,0,hrangle)

  drawSprites();
}