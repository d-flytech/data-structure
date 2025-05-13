export function filterNumbers(array: number[], type: "odd" | "even"): number[] {
    return array.filter((item) => {
        if (type === "odd") return item % 2 !== 0;
        if (type === "even") return item % 2 === 0;
        return false;
    });
}

/*filter each item in the array and return a new array
with the odd and even filtered items*/
