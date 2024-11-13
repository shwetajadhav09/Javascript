const marvel_heros = ["Thor", "ironman", "Spiderman"]

const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  //can use concat() also
// in concat, you neeed to store the items in a new array
console.log(marvel_heros);


//... operator
const all_heros = [...marvel_heros, ...dc_heros]


//flat() -> returns a new array with all sub-array elements concatenated into it recursively upto the specified depth.

const new_arr = [1,2,3, [4, 5], 6, [7, [8, 9]]]