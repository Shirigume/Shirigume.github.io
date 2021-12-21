let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
let weight = document.getElementById('weight-imput'). value;
let weight = document.getElementById('height-imput'). value;
let finalbmi = (weight / height * height) * 10000;
document.getElementById('bmi-output').value = finalbmi;
});