// this context of Arrow function

const myObj = {
    runTimeout() {
        setTimeout(() => {
            this.printData();
        }, 200);
    },

    printData() {
        console.log("Hi codesquad!");
    }
}

myObj.runTimeout();