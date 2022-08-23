const button = document.querySelector(".dice-button")

const number = document.querySelector(".content-number")

const text = document.querySelector(".content-text")

const imagem = document.querySelector(".dice-button img")

let rotação360 = "rotate(360deg)"

console.log(button)
 button.addEventListener("click", () => {
    
    // const rotação0 = "rotate(0)"
    if(rotação360 == "rotate(360deg)"){
        rotação360 = "rotate(0)"
        imagem.style.transform = rotação360
    }else{
        rotação360 = "rotate(360deg)"
        imagem.style.transform = rotação360
    }
    fetch("https://api.adviceslip.com/advice")
    .then(Response => Response.json())
    .then(json => {
        console.log(json.slip.id)
        console.log(json.slip.advice)
        number.textContent = json.slip.id
        text.textContent = json.slip.advice
    })
 })