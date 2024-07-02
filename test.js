let cars = ['yellow','green','white'];

console.log('\nfor');
for(let i=0;i<cars.length;i++) {
    console.log(cars[i]);
}

console.log('\nfor in');
for( key in cars) {
    console.log(key);
}

console.log('\nfor of');
for( car of cars) {
    console.log(car);
}

console.log('\nforeach');
cars.forEach((value,index)=>{
    console.log(index+'=>'+value);
})

console.log('\nwhile');
let i = 0 
while(i < cars.length) {
    console.log(cars[i]);
    i++
}

console.log('\ndo while');
let j = 999999
do {
    console.log(cars[j]);
}while(j < cars.length) 

// continue; break; works in js

//sets 
// a list of unique values
const letters = new Set(["a","b","c"]);
letters.add('d');
letters.add('b');
letters.has('b');//reutrn true
console.log(letters)

const arrs = new Set([["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"]]);
arrs.add([1,2,3]);
console.log(arrs);


//maps
// Create a Map
// Maps are objects 
// typeof fruits will return Object
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//add new item to map
fruits.set('mangoes',300);
fruits.has('mangoes') //return  true if mango exists
console.log(fruits);
fruits.clear();
console.log('after clear map');
console.log(fruits);