// function dobol(number){
//     const dobbol = number * 2;
//     // console.log(dobbol);
//     return dobbol;
// }

// dobol(43);


// const dabol = dobol(13);
// console.log(dabol);

function add(price1 , price2){
    const total = price1 + price2;
    return total;
}


const bill = add(5, 34);
console.log(bill);

function doMath( value1, value2){
    const add = value1 + value2;
    console.log(add);
    const subtract = value1 - value2;
    console.log(subtract);
    const multiply = value1 * value2;
    const divide = multiply / 2;
    return divide;
}

const result = doMath( 6, 4 );
console.log(result);



function isEven(numbur){
    if (numbur % 2 === 0){
        return true;
    }
    else{
        return false;

    }
}


console.log(isEven(5));
console.log(isEven(64));



function evenSizedString(str){
    
}