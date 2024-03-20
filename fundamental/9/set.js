const fruits = ["banana","apple","pen","banana"];
const newFruits = new Set(fruits);

newFruits.add("avocado")//Push
newFruits.delete("avocado")//

console.log(newFruits);
console.log(newFruits.size);