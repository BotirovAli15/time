// setTimeout(function() {
//     console.log("Hello world!");
// }, 10000)

// let newText = document.createElement("h1")
// setTimeout(function() {
//     newText.textContent = "salom"
//     document.body.appendChild(newText)
// },1000)

// let count = 0;
// let newText = document.createElement("h1")

// let time = setInterval(function() {
//     newText.textContent = count++ 
//     document.body.appendChild(newText)
// },1000)


let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
    let currentTime = new Date();
    
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000)