let scoreHome = 0
let scoreGuest = 0
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
function add1PointHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
    document.getElementById("win-message").textContent = ""
}
function add2PointHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
    document.getElementById("win-message").textContent = ""
}
function add3PointHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
    document.getElementById("win-message").textContent = ""
}
function add1PointGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
    document.getElementById("win-message").textContent = ""
}
function add2PointGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
    document.getElementById("win-message").textContent = ""
}
function add3PointGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
    document.getElementById("win-message").textContent = ""
}
function newGame(){
    if(scoreHome > scoreGuest){
        document.getElementById("win-message").textContent = "Home won!"
    }
    else{
        document.getElementById("win-message").textContent = "Guest won!"
    }
    scoreHome = 0
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
    scoreHomeEl.textContent = scoreHome
}