let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let currentPercentage = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue () {
    bill = billInput.valueAsNumber
    console.log(bill)
}

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage (value) {
    let buttonSelected = document.querySelector("button")
}
function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log ("calcular")
    } else {
        console.log ("ainda não é possível calcular")
    }
}