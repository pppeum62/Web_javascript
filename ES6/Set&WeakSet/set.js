let mySet = new Set();

// set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용.

mySet.add("crong");
mySet.add("Lee");
mySet.add("crong");

console.log(mySet.has("Lee"));

mySet.delete("crong");

mySet.forEach(function(v) {
    console.log(v);
});