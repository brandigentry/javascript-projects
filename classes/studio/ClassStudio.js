//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        (this.scores.push(newScore));
    }
    average(){
        let total = 0;
        for (let i = 0; i < this.scores.length; i++){
            total = total + this.scores[i];
        }
        let average = total / this.scores.length;
        return Math.round(average * 10) / 10;
    }
    status(){
        let averageScore = this.average();
        if (averageScore >= 90) {
            return "Accepted";
        } else if (averageScore >= 80) {
            return "Reserve";
        } else if (averageScore >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
let animals = [bear, maltese, gator];

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

animals.forEach((animal) => {
    console.log(`${animal.name} earned an average test score of ${animal.average()}% and has a status of ${animal.status()}.`)
})

// console.log(bear.name, bear.mass, bear.scores);
// console.log(maltese.name, maltese.mass, maltese.scores);
// console.log(gator.name, gator.mass, gator.scores);

bear.addScore(83);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log(`${gator.name} is going to keep trying until he can pass the test`);
while (gator.status() !== "Accepted") {
    let testScore = Math.floor(Math.random() * (100 - 80 + 1) + 80);
    gator.addScore(testScore);
    console.log(`${gator.name} scored ${testScore} on the last test and now his average is ${gator.average()}%.`)
}