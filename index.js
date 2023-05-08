let inputNum = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");

const length1 = document.getElementById("meter-foot");
const length2 = document.getElementById("foot-meter");

const volume1 = document.getElementById("liter-gallon");
const volume2 = document.getElementById("gallon-liter");

const mass1 = document.getElementById("kilo-pound");
const mass2 = document.getElementById("pound-kilo");


/* 
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 feet = 0.305 meters
1 gallon = 3.788 liters
1 pound = 0.454 kilograms
*/

convertBtn.addEventListener ("click", function() {
  let number = inputNum.value;
  number = Number(number);
  
  convertLength(number);
  convertVolume(number);
  convertMass(number);
})

convertBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log("Button clicked");
    convertBtn.click();
  }
});


function convertLength(a) {
  let len1 = (a * 3.281).toFixed(2);
  let len2 = (a * 0.305).toFixed(2);
  
  length1.textContent = `${a} meters = ${len1} feet`;
  length2.textContent = `${a} feet = ${len2} meters`;
}

let vol1 = 1;
let vol2 = 1;

function convertVolume(a) {
  vol1 = (a * 0.264).toFixed(2);
  vol2 = (a * 3.788).toFixed(2);
  
  volume1.textContent = `${a} liters = ${vol1} gallons`;
  volume2.textContent = `${a} gallons = ${vol2} liters`;
}

function convertMass(a) {
  let m1 = (a * 2.204).toFixed(2);
  let m2 = (a * 0.454).toFixed(2);

  mass1.textContent = `${a} kilos = ${m1} pounds`;
  mass2.textContent = `${a} pounds = ${m2} kilos`;
}