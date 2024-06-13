let rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won';
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won';
    } else if(p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won';
    } else if(p1 === 'rock' && P2 === 'scissors') {
        return 'Player 1 won';
    } else if(p1 === 'rock' && p2 === 'rock' || p1 === 'paper' && p2 === 'paper' || p1 === 'scissors' && p2 === 'scissors') {
        return 'Draw';
    }
}
console.log(rps('scissors', 'rock'));