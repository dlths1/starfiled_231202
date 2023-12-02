let stars = []; //(x, y) //별 여러개 생성하기 위한 배열 객체
let factor = 100; //
let speedSlider; //속도 조절용 슬라이드
let width, height;


function setup() {
  width = windowWidth; 
  height = windowHeight;
  createCanvas(width, height);
  speedSlider = createSlider(0, 20, 10, 1); //최소, 최대, 시작값, 간극

  for(let i = 0; i < 500; i++){
    stars[i] =  createVector(
      random(-width*factor, width*factor),
      random(-height*factor, height*factor),
      random(width)); //z는 속도를 의미
    stars[i].pz = stars[i].z; //이전의 좌표
    //stars[i] = {x, y, z, pz};

  }
 
  //star 변수 안에 x, y, z의 값을 묶어서 저장.
}

function draw() {
  background(0, 0, 0);
  fill(255);
  translate(width/2, height/2); //화면 가운데로 이동

  for(let star of stars){
    let x = star.x/star.z; //속도를 나눈만큼 x좌표가 이동하도록
    let y = star.y/star.z;
    let px = star.x/star.pz;
    let py = star.y/star.pz;
    let d = map(star.z, 0, width, 10, 1);
    //map(대상, 대상의 최소, 대상의 최대, 새로운 범주의 최소, 새로운 범주의 최대)

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
