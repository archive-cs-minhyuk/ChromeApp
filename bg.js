const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image); //append해도 되지만, 배경이 제일 위로 올라와서 다른 글자 안보여서 이렇게 함
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); //random returns 0 between 1(probably?)
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
