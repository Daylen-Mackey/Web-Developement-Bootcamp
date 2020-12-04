/*
* BMI < 18.5 --> Output "Your BMI is <bmi>. You are underweight"
* 18.5 <= BMI <= 24.9 --> Output "Your BMI is <bmi>. You have a normal weight"
* BMI > 24.9 --> Output "Your BMI is <bmi>. You are overweight"
*
* */

function bmiCalculator (weight, height) {
    BMI = weight / (height ** 2 )

    var interpretation;

    if ( BMI < 18.5 ){
        interpretation = `Your BMI is ${BMI}. You are underweight.`

    } else if ( BMI > 24.9 ) {
        interpretation = `Your BMI is ${BMI}. You are underweight.`


    } else{
        interpretation = `Your BMI is ${BMI}. You have a normal weight.`

    }


    return interpretation;
}

var inputWeight = prompt("Enter your Weight in kg")
var inputheight = prompt("Enter your Height in m")

alert(bmiCalculator(inputWeight,inputheight))
