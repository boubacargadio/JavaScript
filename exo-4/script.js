// you can write js here


var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"].slice(1);

var messagePopped = secretMessage.pop() 

var messageAdded = ["to", "program"];
secretMessage.push(...messageAdded);

secretMessage[secretMessage.indexOf("easily")] = "right";

secretMessage.unshift("Programming")
secretMessage.splice(secretMessage.indexOf('get'), 5, "know");

var secretString = secretMessage.join(" ");

console.log(secretMessage);
console.log(secretString);
console.log('exo-4');