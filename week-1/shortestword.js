function findShort (s) {
    const words = s.split('');

    let shortestLength = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestLength) {
            shortestLength = words[i].length;
        }
    }
    return shortestLength;
}

console.log(findShort('I am a boy'));