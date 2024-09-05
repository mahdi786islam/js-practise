var weightKg  = 60;
var heightCm = 1.56;
var BMI = weightKg / heightCm**2;
console.log(BMI.toFixed(1));
if( BMI < 18.5){
    console.log('You are underweight')
}
else if( BMI == 18.5 || BMI <= 24.9){
    console.log('You are Normal')
}
else if( BMI >= 25 || BMI <= 29.9 ){
    console.log('You are overweight')
}
else{
    console.log('You are obese')
}