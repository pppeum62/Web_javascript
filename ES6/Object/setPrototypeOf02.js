// setPrototypeOf

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동 시간 : " + this.healthTime);
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}

// child obj
const healthChildObj = {
    getAge : function() {
        return this.getAge;
    }
}

Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({
    age : 19
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();

console.log("childObj is " + childObj);