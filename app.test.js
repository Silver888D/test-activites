const {sum, second, ownedCars, letterReturn, numConvert, whereAmI, numOfStud} = require('./app');
const num =5
const num1 =1
const num2 =3
const make = 'ford'
const model = 'mondeo'
const planetSelector = 2
const students =[true,true,true,true,false];
const countStudents =students.filter(value => value === true).length;

describe('sum function tests',()=>{
    test ('not null', ()=>{expect(sum(num1,num2)).not.toBeNull();})
                            
})
describe('second function tests',()=>{
    test('truthy', ()=>{expect(second()).toBeTruthy();})
    test('not falsy', ()=>{expect(second()).not.toBeFalsy();})})

test('object properties equal',()=>{expect(ownedCars(make,model)===(make,model))})


test('letter return words over 6',()=>{expect(letterReturn()).toBe>=6})

test('num to string',()=>{expect(numConvert(num)).not.toBeNaN})

test('planet finder',()=>{expect(whereAmI(planetSelector)).toBe(planets[planetSelector])})

test('number of students',()=>{expect(numOfStud()).toBe(countStudents)})