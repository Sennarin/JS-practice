const arr = [1, 45, 4 ,69, 8];

arr.sort( compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside of the array ${arr}`);
});

const  str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));