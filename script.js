'use strict'

const carName = document.querySelector('#carName')
const carSpeed = document.querySelector('#carSpeed');
const fordBtn = document.getElementById("#btn");
const benzBtn = document.getElementById("#btn2");
const bmwBtn = document.getElementById("#btn3");

class Cars{
    constructor(name, speed){
this.name=name;
this.speed=speed
    }
    speedup(){
     return  this.speed= this.speed+10;
    }
}


const ford = new Cars('ford', 125);
const benz = new Cars('Benz GLE', 125);
const bmw = new Cars('BMW', 125);

fordBtn.addEventListener('click', function(){
    ford.speedup();
    carName.innerHTML = ford.name;
    carSpeed.innerHTML = ford.speed;
})
benzBtn.addEventListener('click', function(){
    benz.speedup();
    carName.innerHTML = benz.name;
    carSpeed.innerHTML = benz.speed;
})
bmwBtn.addEventListener('click', function(){
    bmw.speedup();
    carName.innerHTML = bmw.name;
    carSpeed.innerHTML = bmw.speed;
})
// Window.write= `The car name is ${ford.name} and its speed is ${ford.speed}`;