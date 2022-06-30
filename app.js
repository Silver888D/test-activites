function sum(num1, num2){return (num1 + num2)}

console.log(sum(1,3))

function second(){if ((1+2) === 3); return true}

function ownedCars(make,model){this.make = make; this.model = model;} 

const newCar = new ownedCars('ford','modeo')

console.log(newCar)
myArray=['Dan','Stuart','Benjamin'];

function letterReturn(){let testWords = myArray.filter(testWord => testWord.length >=6); return testWords;}

console.log(letterReturn())

function numConvert(num){num.toString(); return num;}

console.log(numConvert(5))

planets =['Mercury', 'Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']

function whereAmI(planetSelector){return planets[planetSelector];}

console.log(whereAmI(2))

function numOfStud(){students =[true,true,true,true,false];
const countStudents =students.filter(value => value === true).length; return countStudents;}

console.log(numOfStud())
module.exports = {sum , second, ownedCars, letterReturn, numConvert, whereAmI, numOfStud}