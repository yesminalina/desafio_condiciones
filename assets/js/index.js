// EJERCICIO 1 - IMAGEN
const dogImg = document.querySelector("#dog");

dogImg.addEventListener("click", () => {

    if (dogImg.style.border == "") {
        dogImg.style.border = "10px inset gold"
    } else {
        dogImg.style.border = ""
    }

})


// EJERCICIO 2 - STICKERS
const quantity1 = document.querySelector("#quantity1");
const quantity2 = document.querySelector("#quantity2");
const quantity3 = document.querySelector("#quantity3");
const verify = document.querySelector("#verify");
const msgSticker = document.querySelector("#msg-sticker")

verify.addEventListener("click", () => {
    sticker1 = quantity1.value
    sticker2 = quantity2.value
    sticker3 = quantity3.value

    totalSticker = +sticker1 + +sticker2 + +sticker3
    console.log(totalSticker)

    if (totalSticker > 10) {
        msgSticker.innerHTML = "Llevas demasiados stickers!"
    } else {
        msgSticker.innerHTML = `Llevas ${totalSticker} stickers!`
    }
})

// EJERCICIO 3 - PASSWORD
const select1 = document.querySelector("#select-1");
const select2 = document.querySelector("#select-2");
const select3 = document.querySelector("#select-3");
const enter = document.querySelector("#enter");
const msgPass = document.querySelector("#msg-pass")

enter.addEventListener("click", () => {
    digit1 = select1.value
    digit2 = select2.value
    digit3 = select3.value

    password = digit1 + digit2 + digit3

    if (password == "911") {
        msgPass.innerHTML = "Password 1 correcto"
    } else if (password == "714") {
        msgPass.innerHTML = "Password 2 correcto"
    } else {
        msgPass.innerHTML = "Password incorrecto"
    }
})
