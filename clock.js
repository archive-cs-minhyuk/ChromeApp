const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const myMinutes = date.getMinutes();
  const myHours = date.getHours();
  const mySeconds = date.getSeconds();
  clockTitle.innerText = `${myHours < 10 ? `0${myHours}` : myHours}:${
    myMinutes < 10 ? `0${myMinutes}` : myMinutes
  }:${mySeconds < 10 ? `0${mySeconds}` : mySeconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // executes the function every 1000 milisec
}

init();
