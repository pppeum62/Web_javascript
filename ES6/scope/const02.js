function home() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");

    console.log(list);
}

// const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
// 변경이 아니라 재할당하는 것이 불가능

// immutabel array
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);