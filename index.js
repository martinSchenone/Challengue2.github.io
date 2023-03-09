
const btn = document.getElementById("submit")
const rating = document.getElementById("rating")
const puntuar = document.getElementById("puntuar")
const span = document.getElementById("span")
const puntuacion = document.getElementById("puntuacion")
const rates = document.querySelectorAll(".circle-number")

rates.forEach((valor)=>{
    valor.addEventListener("click",()=>{
        puntuacion.innerHTML = valor.innerHTML;
    })
})

btn.addEventListener("click",()=>{
    puntuar.style.display = "none"
    rating.style.display = "flex"
})
  
