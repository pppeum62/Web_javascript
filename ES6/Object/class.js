// ES6 class

/*
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}

const h = new Health("Lee");
h.showHealth();
*/

class Health {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth() {
        console.log("안녕하세요 " + this.name + "님!");
    }
}

const myHealth = new Health("Lee");
myHealth.showHealth();