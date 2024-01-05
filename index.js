const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');
const zero=document.getElementById('zero');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
const mul=document.getElementById('mul');
const divide=document.getElementById('divide');
const point=document.getElementById('point');
const reset=document.getElementById('reset');
const equal=document.getElementById('equal');
const del=document.getElementById('delete');
const display=document.getElementById('display');
let r;


function clikedReset(){
    display.value=''
}
reset.addEventListener('click',clikedReset);
function deleteContent(){
   display.value=(display.value).toString().slice(0,-1);
}
del.addEventListener('click',deleteContent);
function addOne(){
    display.value+='1'
}
one.addEventListener('click',addOne);
function addTwo(){
    display.value+='2'
}
two.addEventListener('click',addTwo);
function addThree(){
    display.value+='3'
}
three.addEventListener('click',addThree);
function addFour(){
    display.value+='4'
}
four.addEventListener('click',addFour);
function addFive(){
    display.value+='5'
}
five.addEventListener('click',addFive);
function addSix(){
    display.value+='6'
}
six.addEventListener('click',addSix);
function addSeven(){
    display.value+='7'
}
seven.addEventListener('click',addSeven);
function addEight(){
    display.value+='8'
}
eight.addEventListener('click',addEight);
function addNine(){
    display.value+='9'
}
nine.addEventListener('click',addNine);
function addZero(){
    display.value+='0'
}
zero.addEventListener('click',addZero);
function addPlus(){
    display.value+='+'
}
add.addEventListener('click',addPlus);
function addMinus(){
    display.value+='-'
}
sub.addEventListener('click',addMinus);
function addMul(){
    display.value+='x'
}
mul.addEventListener('click',addMul);
function addDivide(){
    display.value+='/'
}
divide.addEventListener('click',addDivide);
function addPoint(){
    display.value+='.'
}
point.addEventListener('click',addPoint);

function operation(){
    display.value=(display.value).replaceAll('x','*');
    r=eval(display.value);
    if(Number.isInteger(r)){
        display.value=r
    }
    else{
        display.value=r.toFixed(3)
    }

}
equal.addEventListener('click',operation);