
let countElement = document.getElementById("count-element")
let previousElements = document.getElementById("prev-entries")
let count = 0
//let saveElement = document.getElementById("save-element")

function increment() {
    //count = count + 1
    count += 1
    console.log("The increment button was clicked " + count + " time(s)")
    countElement.innerText = count
}

function saveCount() {
    let showPrevEntries = count + " - "
    previousElements.innerHTML += showPrevEntries
    console.log(previousElements.innerHTML)
    console.log("The save button was clicked!")
}

function resetCount (){
    countElement.innerHTML = 0
    count = 0
    console.log("The reset button was clicked!")
}
