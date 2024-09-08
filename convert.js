function inchToFeet(height){
    const feetFrac = height / 12;
    const feet = parseInt(feetFrac);
    const inch = height % 12;
    console.log(feet, 'feet', inch, 'inches')
    return feet, inch;
}

const myHeight = inchToFeet(68);
console.log(myHeight);
