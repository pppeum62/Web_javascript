// Proxy

const myObj = { name: 'Lee', changeValue: 0 };

const proxy = new Proxy(myObj, {
    get : function(target, property, receiver) {
        console.log('get value');
        return Reflect.get(target, property);
    },
    set : function(target, property, value) {
        console.log('set value');
        target['changeValue']++;
        target[property] = value;
    }
});

proxy.name;
proxy.name = "Hello";