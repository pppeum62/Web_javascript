// setPrototypeOf

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동 시간 : " + this.healthTime);
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}

const newObj = Object.setPrototypeOf({
    name : "Lee",
    lastTime : "11:20"
}, healthObj);

console.log("newObj is " + newObj);