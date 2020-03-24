// arrow function

setTimeout(function() {
    console.log("settimeout");
}, 1000);

let newArr = [1, 2, 3, 4, 5].map((v) => (v * 2));

console.log("arrow", newArr);