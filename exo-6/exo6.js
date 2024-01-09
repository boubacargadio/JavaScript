// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms)

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true
console.log(joeInfo)


var football = {
    equipe: "grenoble foot",
    nombreJoueur: 23,
    stade: true,
    trophe: ["ligue2", "coupe de france"],
}

const team = {
    players: {
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    },

    game: {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    },
    
};

function addPlayer (firstName, lastName, age) {
    team(this, firstName, lastName, age)
    console.log('method player')
}

function match (opponent, teamPoints, opponentPoints){
    console.log('method match')
    team(this, opponent, teamPoints, opponentPoints)
}

const polm = new addPlayer("polm", "pok", 22)

console.log(addPlayer)