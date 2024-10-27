let newDate = new Date();
console.log(newDate);

console.log(newDate.toLocaleString());
console.log(newDate.getMonth()+1)
console.log(newDate.getDay()+1);

newDate.toLocaleString('default', {
    weekday: "long"
})