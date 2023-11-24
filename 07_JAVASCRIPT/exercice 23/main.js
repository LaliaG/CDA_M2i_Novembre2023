function generateArrayWithNRandomNumbersBetweenMinAndMax(n, min, max) {
     const t = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
        t.push(randomNumber);
    }
    return t;   
}
function sum(numbers) {
    return sum.reduce((accumulator, currValue) => accumulator + currValue, 0);
}