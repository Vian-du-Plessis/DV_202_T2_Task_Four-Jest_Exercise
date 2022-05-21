//returns a clone of an array
export const cloneArray = (array) => {
    var newArray = array
    return newArray
}

//returns the length of an array
export const returnLengthOfArray = (array) => {
    return array.length
}

//adds a new item to the end of an array
export const pushItemToEndOfArray = (array, item) => {
    var newArray = array
    newArray.push(item)
    return newArray
}

//adds a new item to the start of an array
export const pushItemToStartOfArray = (array, item) => {
    var newArray = array
    newArray.unshift(item)
    return newArray
}

//removes the last item of an array
export const popLastItemFromArray = (array) => {
    var newArray = array
    newArray.pop()
    return newArray
}

//removes the first item of an array
export const popFirstItemFromArray = (array) => {
    var newArray = array
    newArray.shift()
    return newArray
}

//removes a single item of an array based using its index
export const removeItemFromArray = (array, index) => {
    var newArray = array
    newArray.splice(index, 1)
    return newArray
}

//reorders the array
export const returnOrderArray = (array) => {
    return array.sort()
}