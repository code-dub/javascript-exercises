const reverseString = function(word) {

    let stringArray = word.split("");
    // let stringResult =
    console.log(stringArray);
    let returnArray = [];
    console.log(returnArray);

    for (let i = 0; i < (stringArray.length); i++){
        returnArray[i] = stringArray[(stringArray.length - 1 - i)];
        // return returnArray;
    }

    return returnArray.join('');


        
    };





// Do not edit below this line
module.exports = reverseString;
