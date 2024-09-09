const dune = ['elsa', 'emma'];
const frozen = ['roger', 'samuel'];
const lot = true;
const score = 34;

function arrayTest(variable){
    result = Array.isArray(variable);
    return result;
}

const arrayValue = arrayTest(dune);
console.log('Given variable is an array:', arrayValue);

console.log(dune.concat(frozen));

