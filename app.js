//grab num-input, covert btn and all unit field
const numInput = document.getElementById("input-num")
const convertBtn = document.getElementById("convert")
const mFeet = document.getElementById("m-feet")
const ltrGallon = document.getElementById("ltr-gallon")
const kgPound = document.getElementById("kg-pound")

//event on button
convertBtn.addEventListener("click", renderConversions)

function renderConversions() {
    let numToConvert = numInput.value
    if (numToConvert) {
        mFeet.textContent = mAndFeet(numToConvert)
        ltrGallon.textContent = ltrAndGallon(numToConvert)
        kgPound.textContent = kgAndPound(numToConvert)
        numInput.value = ""
    }
    
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function mAndFeet(num) {
    let feet = (num * 3.281).toFixed(3)
    let meters = (num / 3.281).toFixed(3)

    return `${num} ${num == 1 ? "meter" : "meters"} = ${feet} ${feet == 1 ? "foot" : "feet"} | ${num} ${num == 1 ? "foot" : "feet"} = ${meters} ${meters == 1 ? "meter" : "meters"}`
}

function ltrAndGallon(num) {
    let ltr = (num * 0.264).toFixed(3)
    let gallon = (num / 0.264).toFixed(3)
    return `${num} ${num == 1 ? "liter" : "liters"} = ${gallon} ${gallon == 1 ? "gallon" : "gallons"} | ${num} ${num == 1 ? "gallon" : "gallons"} = ${ltr} ${ltr== 1 ? "liter" : "liters"}`
}

function kgAndPound(num) {
    let kg = (num / 2.204).toFixed(3)
    let pound = (num * 2.204).toFixed(3)
    return `${num} ${num == 1 ? "kilo" : "kilos"} = ${pound} ${pound == 1 ? "pound" : "pounds"} | ${num} ${num == 1 ? "pound" : "pounds"} = ${kg} ${kg == 1 ? "kilo" : "kilos"}`
}
