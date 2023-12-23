function missNumber(Array) {
    const n = Array.length;
    const expectSum = (n * (n + 1)) / 2;
    const actualSum = Array.reduce((acc, num) => acc + num, 0);
    return expectSum - actualSum;
}

const Array = [3,0,5,2,1];
console.log(missNumber(Array)); 
