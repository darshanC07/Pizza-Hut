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
}

function close() {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.add("hidden");
    document.getElementsByClassName("backdrop")[0].style.zIndex = -10;
    console.log("cancel")
}