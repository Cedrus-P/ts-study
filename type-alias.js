function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
var name1 = function () { return 'mike'; };
console.log(getName(name1));
// 字面量
var strZ = 'name';
var number = 1;
var person = { name: '123', age: 23 };
