//document.getElementById("count-el").innerText = 5
// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText += "👋"


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
console.log(saveEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}


function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log(count)
    count = 0
    countEl.textContent = count 
}
