// Object assign 메서드

var healthObj = {
    showHealth : function() {
        console.log("오늘 운동 시간 : " + this.healthTime);
    }
}

const myHealth = Object.assign(Object.create(healthObj), {
    name : "Lee",
    lastTime : "11:20"
});

console.log("my health is " + myHealth);