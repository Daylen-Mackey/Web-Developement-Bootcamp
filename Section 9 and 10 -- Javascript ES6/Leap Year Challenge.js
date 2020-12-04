/*
* Leap Year Challenge
*
* Take prompt input and output whether it's a leap year or not
*
* Leap years are ....
* Every year evenly divisible by 4
*   Except years that are evenly divisible by 100
*   Unless it's also divisible by 400
*
*
* Statement:
*  ( Divisible by 4 ) && (( Not divisible by 100 ) || ( Divisible by 400 )
*
*
* */


var inputYear = Number(prompt("Enter a year:"));

var divBy4 = (inputYear%4 == 0)
var divBy100 = (inputYear%100 == 0)
var divBy400 = (inputYear%400 == 0)

if ( divBy4 && (!divBy100 || divBy400) ){
    alert(`${inputYear} is a leap year!`)
} else{
    alert(`${inputYear} is not a leap year :(`)

}