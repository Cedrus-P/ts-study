function echo(arg) {
    return arg;
}
var arg = echo('str');
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result = swap(['str', 123]);
console.log(result);
function RetLen(arg) {
    console.log(arg.length);
    return arg;
}
console.log(RetLen([1, 2, 3]));
