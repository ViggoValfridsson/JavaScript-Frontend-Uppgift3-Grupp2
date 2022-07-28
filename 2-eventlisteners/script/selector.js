// Eventlistener

let button = document.getElementsByTagName('button');

function popUp() {
    alert("Hello nr 2");
}

button[1].addEventListener("click", popUp);

// ------------------
let div = document.getElementsByTagName('div');

function changeBackColor(){
    div[3].style.backgroundColor = "rgb(255, 255, 255)";
}

div[3].addEventListener("mouseover", changeBackColor);

function remove(){
    div[3].removeEventListener("mouseover", changeBackColor);
}

let btn = document.getElementsByClassName('trams');
console.log(btn);
btn.addEventListener("click", remove);