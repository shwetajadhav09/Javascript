const mynums = [1, 2, 3,4,5,6,7,8,9,10]

const newvalues = mynums.filter((num) => num > 4)
// console.log(newvalues);


const newnums = []

mynums.forEach( (num) => {
    if(num > 4){
        newnums.push(num)
    }
})

// console.log(newnums);

const newNums = mynums
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num > 40)

console.log(newNums)