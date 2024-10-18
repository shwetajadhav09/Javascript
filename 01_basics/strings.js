const name = "Shweta"
const repoCount = 50

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shweta');


//*******string method *******/

// console.log(gameName.__proto__);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

console.log(gameName.substring(0,4)); //from index 0-(4-1) = 3

console.log(gameName.slice(0,4));

const newString = "   Shweta    ";

console.log(newString);
console.log(newString.trim());

const url = "https://shweta20%jadhav.com/shweta";

console.log(url.replace('20%', '-'));
console.log(url.includes('shweta'));







