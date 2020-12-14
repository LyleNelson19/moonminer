let cheese = 0
function mine(){
    cheese += 1+rate
    update()
}
function update(){
    document.getElementById("stats").innerHTML=`<h1>Cheese Count: ${cheese}</h1>`
}
// let clickUpgrades={
//     knife: {
//         price: 50,
//         quantity: 0,
//         multiplier: 1,
//         rate:2
//     },
//     pickaxe: {
//         price: 100,
//         quantity: 0,
//         multiplier: 2,
//     }
// }
// let automaticUpgrades= {
//     mousetronaut: {
//         price: 250,
//         quantity: 0,
//         multiplier: 2,
//         rate:
//     },
//     grater: {
//         price:500,
//         quantity:0,
//         multiplier:4
//     },
// }
let rate=0

let knife = 0
let price1 = 50
function buyKnife(){
    if(cheese>=price1){purchaseKnife()}
}
function purchaseKnife(){
    cheese-=price1
    knife+=1
    price1+=5
    updateKnife()
    knifePrice()
    rate+=1
}

function updateKnife(){document.getElementById("knifecount").innerHTML=`<h3>Knives: ${knife}</h3>`}
function knifePrice(){document.getElementById("knife").innerHTML=`<h3>Knife = -${price1}</h3>`}


let pickaxe = 0
let price2 = 100
function buyPickaxe(){
    if (cheese>=100)(purchasePickaxe())
}
function purchasePickaxe(){
    cheese-=price2
    pickaxe+=1
    price2+=10
    updatePickaxe()
    pickaxePrice()
    rate+=3
}

function updatePickaxe(){document.getElementById("pickaxecount").innerHTML=`<h3>Pickaxes: ${pickaxe}`}
function pickaxePrice(){document.getElementById("pickaxe").innerHTML=`<h3>Pickaxe= -${price2}</h3>`}

let mousetronaut = 0
let price3 = 250
function buyMousetronaut(){
    if (cheese>=price3){purchaseMousetronaut()}
}
function purchaseMousetronaut(){
    cheese-=price3
    mousetronaut+=1
    price3+=25
    updateMousetronaut()
    mousetronautPrice()
    setInterval(() => {
        cheese+=5
    }, 3000);
    // auto1()
}

function updateMousetronaut(){document.getElementById("mousetronautcount").innerHTML= `<h3> Mousetronauts: ${mousetronaut}`}
function mousetronautPrice(){document.getElementById("mousetronaut").innerHTML= `<h3>Mousetronaut= -${price3}</h3>`}
// function auto1(){setInterval(() => {
// document.getElementById("stats").innerHTML=`<h1>Cheese Count: ${cheese}</h1>`
// }, 3000);}

let grater = 0
let price4= 500
function buyGrater(){
    if (cheese>=price4){purchaseGrater()}
}
function purchaseGrater(){
    cheese-=price4
    grater+=1
    price4+=50
    updateGrater()
    graterPrice()
    setInterval(() => {
        cheese+=10
    }, 3000);
}

function updateGrater(){document.getElementById("gratercount").innerHTML= `<h3> Graters: ${grater}`}
function graterPrice(){document.getElementById("grater").innerHTML= `<h3>Grater= -${price4}</h3>`}