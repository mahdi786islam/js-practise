let age = 45;

const student = false;
if( age <= 18 ){
    console.log("No ticket needed");
}
else if( student === true ){
    console.log("Ticket price is half")
}
else if( age >= 60 ){
    console.log("Ticket price is 15% less")
}
else{
    console.log("Regular price of ticket")
}