const array = [5,5,7,4,7,1,1]

const findUnique = (arr) => {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
}
console.log(findUnique(array))