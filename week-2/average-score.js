const betterThanAverage = (classPoints, yourPoints) => {

    let totalPoints = classPoints.reduce((sum, points) => {
        return sum + points;
    })

    let averagePoints = totalPoints / classPoints.length;

    return yourPoints > averagePoints;
}

console.log(betterThanAverage([75, 80, 85, 90, 95], 80));