let usedBallNums = new Array(76);

function ballDraw() {
  for(var i=0 ; i<25 ; i++){
      setBall(i);
    }
}

function setBall(thisBall){
  let currentBall = "ball" + thisBall;
  let colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
  let colBasis = colPlace[thisBall] * 15;
  let newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedBallNums[newNum]);
  
  usedBallNums[newNum] = true;
  document.getElementById(currentBall).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherBallDraw() {
  for (let i = 1; i < usedBallNums.length; i++) {
    usedBallNums[i] = false;
  };

  ballDraw();
  return false;
}