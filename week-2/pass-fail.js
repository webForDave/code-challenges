function determinePassOrFail(scores, passingThreshold) {
    let derterminer = scores.map(score => {
        if(score > passingThreshold) {
            return true
        } else {
            return false
        }
    })

    return derterminer;
}
console.log(determinePassOrFail([50, 60, 70, 75, 90, 45], 70));