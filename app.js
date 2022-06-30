function sum(num1, num2){return (num1 + num2)}

function second(){if ((1+2) === 3); return true}

function ownedCars(make,model){this.make = make; this.model = model;} 

const newCar = new ownedCars('ford','modeo')

console.log(newCar)
myArray=['Dan','Stuart','Benjamin'];

function letterReturn(){let testWords = myArray.filter(testWord => testWord.length >=6); return testWords;}

function numConvert(num){num.toString(); return num;}

planets =['Mercury', 'Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']

function whereAmI(planetSelector){return planets[planetSelector];}

function numOfStud(){students =[true,true,true,true,false];
const countStudents =students.filter(value => value === true).length; return countStudents;}

module.exports = {sum , second, ownedCars, letterReturn, numConvert, whereAmI, numOfStud}