function updateLight (current) {
    if (current.toLowerCase() === 'green') {
        return 'yellow';
    } else if (current.toLowerCase() == 'yellow') {
        return 'red';
    } else if (current.toLowerCase() === 'red') {
        return 'green';
    } else {
        return 'Invalid input';
    }
}

console.log(updateLight('GrEEn'));