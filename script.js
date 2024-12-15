let item = document.getElementsByClassName("item")


function purchase(pizzaIndex) {
    // let body = document.getElementsByTagName("body")[0]
    // body.style.filter = "blur(5px)";
    document.getElementsByClassName("backdrop")[0].style.zIndex = 10;
    let pizza = item[pizzaIndex]
    let pizzaImage = pizza.getElementsByTagName("img")[0].src

    document.getElementById("orderedPizza").src = pizzaImage

    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.remove("hidden");
    console.log("clicked")
    let cancel = document.getElementById("cancel")
    console.log(cancel)
    cancel.addEventListener("click", close)
    document.getElementsByClassName("confirm")[0].addEventListener('click',confirm);
}

function close() {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.add("hidden");
    document.getElementsByClassName("backdrop")[0].style.zIndex = -10;
    console.log("cancel")
}

function confirm(){
    close()
    document.getElementsByClassName("backdrop")[2].style.zIndex = 10;
    let overlay = document.getElementsByClassName("overlay")[2];
    overlay.classList.remove("hidden");
    console.log("confirm")
    setInterval(updateTimer, 1000)
}
function orderClose(){
    let overlay = document.getElementsByClassName("overlay")[2];
    overlay.classList.add("hidden");
    document.getElementsByClassName("backdrop")[2].style.zIndex = -10;
    console.log("cancel")
}
function addTopping(){
    document.getElementsByClassName("backdrop")[1].style.zIndex = 10;
    let overlay = document.getElementsByClassName("overlay")[1];
    overlay.classList.remove("hidden");
    console.log("clicked")
}
function confirmTopping(){
    let overlay = document.getElementsByClassName("overlay")[1];
    overlay.classList.add("hidden");
    document.getElementsByClassName("backdrop")[0].style.zIndex = -10;
}

let time = 45 * 60; 


function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(timerInterval); 
    alert("Time's up!");
  }
}

