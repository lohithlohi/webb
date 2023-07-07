// // Using an object
// let myObj = {};

// // Adding keys
// console.time("object-add");
// for (let i = 0; i < 1000000; i++) {
//     myObj[i] = i;
// }
// console.timeEnd("object-add");

// // Removing keys
// console.time("object-remove");
// for (let i = 0; i < 1000000; i++) {
//     delete myObj[i];
// }
// console.timeEnd("object-remove");

// // Using a map
// let myMap = new Map();

// // Adding keys
// console.time("map-add");
// for (let i = 0; i < 1000000; i++) {
//     myMap.set(i, i);
// }
// console.timeEnd("map-add");

// // Removing keys
// console.time("map-remove");
// for (let i = 0; i < 1000000; i++) {
//     myMap.delete(i);
// }
// console.timeEnd("map-remove");


// Performance comparison: Maps vs Objects

const ITERATIONS = 100000;

let map = new Map();
let obj = {};

// Adding keys
console.time("Map - Add");
for (let i = 0; i < ITERATIONS; i++) {
  map.set(`key${i}`, i);
//   map.set(i, i);
}
console.timeEnd("Map - Add");

console.time("Object - Add");
for (let i = 0; i < ITERATIONS; i++) {
  obj[`key${i}`] = i;
    // obj[i] = i;
}
console.timeEnd("Object - Add");

// Removing keys
console.time("Map - Remove");
for (let i = 0; i < ITERATIONS; i++) {
  map.delete(`key${i}`);
//   map.delete(i);
}
console.timeEnd("Map - Remove");

console.time("Object - Remove");
for (let i = 0; i < ITERATIONS; i++) {
  delete obj[`key${i}`];
//   delete obj[i];
}
console.timeEnd("Object - Remove");



// function timeit(fn) {
//     const start = performance.now();
//     fn();
//     const end = performance.now();
//     return end - start;
// }

// const map = new Map();
// const object = {};

// const timeMap = timeit(() => {
//   for (let i = 0; i < 100000; i++) {
//     map.set(i, i);
//   }
// });

// const timeObject = timeit(() => {
//   for (let i = 0; i < 100000; i++) {
//     object[i] = i;
//   }
// });

// console.log("map:", timeMap);
// console.log("object:", timeObject);
