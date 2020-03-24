// rest parameters

function checkNum() {
    const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(arguments));

    const result = argArray.every((v) => typeof v === "number");
    console.log(result);
}

const result = checkNum(10, 2, 3, 4, 5, false);