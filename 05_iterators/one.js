//for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
    
}

//map -- hold key value pair
// unique in the map's collection


const map = new Map();
map.set('IN', "INDIA");
map.set('FR', "FRANCE");
map.set('NZ', "NEW ZEALAND");

//console.log(map);

for(const [key, value] of map){
    console.log(value);
    
}


//iterators for objects

const myobject = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby"
}

for(const key in myobject){
    console.log(key);
}

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName: "cpp"
    }

]

mycoding.forEach((item) => {
    console.log(item.languageFileName);
})