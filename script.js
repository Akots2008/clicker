let pudge = document.querySelector(".PudgeIMG")
let scoreHTML=document.querySelector(".score")
let score = 0


pudge.addEventListener("click", function() {
    score=score + 1
    scoreHTML.innerHTML=score
    document.cookie = `score=${score};max-age=10000000000000000000`
})

let newGame = document.querySelector("p")

newGame.addEventListener("click", function(){
    document.querySelector(".game").style.display = "none"
    score=0
    scoreHTML.innerHTML=score
})
let ContGame = document.querySelector("p")
ContGame.addEventListener("click",function (){
    document.querySelector(".game").style.display = "none"
    
})

