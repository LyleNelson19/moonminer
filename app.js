let cheese = 0;
function mine(){
    cheese += 1
    update()
}
function update(){
    document.getElementById("stats").innerHTML=`<h1>Cheese Count: ${cheese}</h1>`
}
let clickUpgrades={
    knife: {
        price: 50,
        quantity: 0,
        multiplier: 1,
        rate:2
    },
    pickaxe: {
        price: 100,
        quantity: 0,
        multiplier: 1,
        rate:3
    }
}
let automaticUpgrades= {
    mousetronaut: {
        price: 250,
        quantity: 0,
        multiplier: 1,
        rate:3
    },
    rover: {
        price:500,
        quantity:0,
        multiplier:1,
        rate:5
    },
}
function buyKnife(){
    if (cheese>=50){cheese-=50}
}