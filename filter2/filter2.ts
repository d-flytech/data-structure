const array: number[] = [1, 2, 3, 4, 5];
const oddNum: number[] = array.filter((item: number): boolean => item % 2 !== 0);
const evenNum: number[] = array.filter((item: number): boolean => item % 2 === 0);
console.log(`odd numbers: ${oddNum} , even numbers: ${evenNum}`);

/*filter each item in the array and return a new array
with the odd and even filtered items*/