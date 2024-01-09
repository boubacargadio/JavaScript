// you can write js here

let text = "worlueawfvduoid"
let input = Array.from(text.toUpperCase());
let vowels = ["U", "E", "I", "A", "O"];
let resultArray = [];


for (i = 0; i < vowels.length; i++) {

    for (j = 0; j < input.length; j++) {
        if (input[j] === vowels[i]){
            resultArray.push(input[j]);
        }
    }
}

console.log(resultArray)
console.log('exo-5');