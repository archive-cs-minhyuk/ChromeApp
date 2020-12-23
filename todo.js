const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target; //target: 어떤 button이 click된 것인지
  const li = btn.parentNode; // 그 부모인 li를 가리킴
  toDoList.removeChild(li); //html 상에서 지워준 것
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  }); //filter: filterFn에 해당하는 것들만 모아 새로운 array를 만들어줌
  toDos = cleanToDos; //toDos가 바뀌기 위해서는 let으로 선언되어야 함.
  saveToDos(); //localstorage 상에서 지워준 것
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //local storage에는 object 저장 불가. string만 가능.
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteToDo); //버튼 클릭 시 지우기 위해 event 추가
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); //toDos라는 list를 계속 바꿔주는 형식
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value; // form에 들어온 input
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //string -> object
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    }); //parsedToDos is a list
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
