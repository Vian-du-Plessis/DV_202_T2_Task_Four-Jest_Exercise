import { cloneArray, returnLengthOfArray, pushItemToEndOfArray, pushItemToStartOfArray, popLastItemFromArray, removeItemFromArray, returnOrderArray, popFirstItemFromArray } from './arrayHandling';

describe("Testing Array Handling...", () => {
    test("An array is cloned...", () => {
        const myArray = [1, 2, 3, 4, 5];

        expect(cloneArray(myArray)).toBe(myArray);
    });

    test("Returns the length of an array", () => {
        const myArray = [1, 2, 3, 4, 5];
        const myArrayLength = myArray.length;

        expect(returnLengthOfArray(myArray)).toBe(myArrayLength);
    });

    test("Adds a new item to the end of an array", () => {
        const myArray = [1, 2, 3, 4, 5];
        const myArrayItem = 1;

        const newArray = pushItemToEndOfArray(myArray, myArrayItem);
        
        expect(newArray[newArray.length - 1]).toBe(myArrayItem);
    });

    test("Adds a new item to the start of an array", () => {
        const myArray = [1, 2, 3, 4, 5];
        const myArrayItem = 5;

        const newArray = pushItemToStartOfArray(myArray, myArrayItem);

        expect(newArray[0]).toBe(myArrayItem);
    });

    test("Removes last item from an array", () => {
        const myArray = [1, 2, 3, 4, 5];
        myArray.pop();

        const poppedArray = popLastItemFromArray(myArray);

        expect(myArray).toBe(poppedArray);
    });

    test("Remove the first item from an array", () => {
        const myArray = [1, 2, 3, 4, 5];
        myArray.shift();

        const shiftedArray = popFirstItemFromArray(myArray);

        expect(myArray).toBe(shiftedArray);
    });

    test("Removes indexed item from array", () => {
        const myArray = [1, 2, 3, 4, 5];
        myArray.splice(3, 1);

        const splicedArray = removeItemFromArray(myArray, 3);

        expect(myArray).toEqual(splicedArray);
    });

    test("Sorts the array", () => {
        const myArray = [1, 2, 3, 4, 5];
        myArray.sort();

        const sortedArray = returnOrderArray(myArray);

        expect(myArray).toEqual(sortedArray);
    });
});