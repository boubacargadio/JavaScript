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


const team = {

    players: [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11
        },
        {
            firstName: "Alicia",
            lastName: "Gomez",
            age: 12
        }
    ],

    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Raiders",
            teamPoints: 35,
            opponentPoints: 30
        }
    ],

    addPlayer: function (firstName, lastName, age) {
        //this pour faire reference a l'objet team
        this.players.push({
            //creation des nouvels objets players
            firstName: firstName,
            lastName: lastName,
            age: age,
        })
    },

    addGame: function (opponent, teamPoints, opponentPoints) {
        this.games.push({
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        })
    }
};


// Ajouter plusieurs joueurs
team.addPlayer("Joueur1", "Nom1", 28)
team.addPlayer("Joueur2", "Nom2", 25)
team.addPlayer("Joueur3", "Nom3", 30)

// Ajouter plusieurs matchs
// "adversaire", "mesPoints", "adversairePoint"
team.addGame("Match1", 45, 39)
team.addGame("ÉquipeA", 30, 35)
team.addGame("ÉquipeB", 38, 42)
team.addGame("ÉquipeC", 46, 30)


/* point de mon equipe */
team.calculateTotalPoints = function () {
    let totalPoints = 0;

    // Parcourir de (0 a this.games.length (length le nombre de games))le tableau de matchs et calculer les points de l'équipe
    for (let i = 0; i < this.games.length; i++) {
        totalPoints += this.games[i].teamPoints;
    }

    return totalPoints;
};

console.log("Total des points de mon l'equipe :", team.calculateTotalPoints());




/* moyenne point adversaire */
team.calculateAverageOpponentPoints = function () {
    let totalOpponentPoints = 0;

    // Parcourir le tableau de matchs et calculer
    for (let i = 0; i < this.games.length; i++) {
        totalOpponentPoints += this.games[i].opponentPoints;
    }
    // Calculer la moyenne en divisent par le nombre total de matchs (this.games.length)
    const averageOpponentPoints = totalOpponentPoints / this.games.length;

    /* pour arrondire */
    const roundAvarage = Math.round(averageOpponentPoints)
    return roundAvarage;
};
console.log("Moyenne des points de l'équipe adverse : " + team.calculateAverageOpponentPoints());




/* le plus age */
team.findOldestPlayer = function () {

    /* prende reference du joueur1 */
    var oldestPlayer = this.players[0];

    for (var i = 1; i < this.players.length; i++) {
        if (this.players[i].age > oldestPlayer.age) {
            oldestPlayer = this.players[i];
        }
    }

    return oldestPlayer;
};

console.log("Le joueur le plus age est : ", team.findOldestPlayer());