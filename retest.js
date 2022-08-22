function toChangeCloth(color,design="Nike"){
    return (`i have changed my cloth to ${color} and ${design}`)
}

toChangeCloth("black", "adidas")

toChangeCloth("blue")

function ifChangeCloth(){
    console.log(toChangeCloth("Red", "Gucci"))
}
ifChangeCloth()

function displayDone(){
    console.log("3 seconds has ellaped")
}
console.log(setTimeout(() => {
    console.log("3 seconds has ellaped")
} , 3000))
