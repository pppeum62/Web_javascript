function print() {
    // filter, includes, from을 사용해서 문자열 'e'가 포함된 노트로 구성된 배열을 만들어서 반환하기

    let list = document.querySelectorAll("li");
    let listArray = Array.from(list);
    let resultArray = listArray.filter(function(value) {
        return value.innerText.includes("e");
    });

    return resultArray;
}

console.log(print());