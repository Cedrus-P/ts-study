function echo(arg) {
    return arg;
}
var arg = echo('str');
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result = swap(['str', 123]);
console.log(result);
// extends 约束
function RetLen(arg) {
    console.log(arg.length);
    return arg;
}
console.log(RetLen([1, 2, 3]));
// 泛型在类和接口的应用
var Gobj = RetLen({ length: 10, width: 10 });
var Garr = RetLen([1, 2, 3]);
var Quene = /** @class */ (function () {
    function Quene() {
        this.data = [];
    }
    Quene.prototype.push = function (item) {
        return this.data.push(item);
    };
    Quene.prototype.pop = function () {
        return this.data.shift();
    };
    return Quene;
}());
var quene = new Quene();
quene.push(1);
quene.push('str');
console.log(quene.pop().toFixed());
console.log(quene.pop().toFixed());
