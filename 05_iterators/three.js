const myNums = [1,2,3]

// const total = myNums.reduce(function (acc, curval){
//     console.log(`${acc} and ${curval} = `);
//     return acc+curval;
// },0)
const total = myNums.reduce( (acc, curval) => acc+curval, 0)

console.log(total);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2000
    },
    {
        itemName: "web dev course",
        price: 5000
    },
    {
        itemName: "java course",
        price: 3000
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
