let stars = []; //(x, y)
let factor = 100;
let speedSlider;
let width, height;


function setup() {
  width = windowWidth; 
  height = windowHeight;
  createCanvas(width, height);
  speedSlider = createSlider(0, 20, 10, 1);

  for(let i = 0; i < 500; i++){
    stars[i] =  createVector(
      random(-width*factor, width*factor),
      random(-height*factor, height*factor),
      random(10, 400));
    stars[i].pz = stars[i].z;
    //stars[i] = {x, y, z, pz};

  }
 
  //star 변수 안에 x, y, z의 값을 묶어서 저장.
}

function draw() {
  background(0, 0, 0);
  fill(255);
  translate(width/2, height/2);

  for(let star of stars){
    let x = star.x/star.z;
    let y = star.y/star.z;
    let px = star.x/star.pz;
    let py = star.y/star.pz;
    let d = map(star.z, 0, 400, 10, 1);

    fill(255, 200, 150);
  //translate(width/2, height/2);
  //stroke(255,255,100);
 
    circle(x, y, d);
    noStroke();
    line(x, y, px, py);
    star.pz = star.z;
    star.z -= speedSlider.value();

    if(star.z < 1 ){
      star.x = random(-width*factor, width*factor);
      star.y = random(-height*factor, height*factor);
      star.z = width;
      star.pz =width;
  }
    
  //star.z += 10;
  }

}
