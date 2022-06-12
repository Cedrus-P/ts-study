function echo<T>(arg: T): T {
	return arg
}

const arg = echo('str')

function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]]
}
const result = swap(['str', 123])
console.log(result)

// 约束泛型
interface IWithLen {
	length: number
}
// extends 约束
function RetLen<T extends IWithLen>(arg: T): T {
	console.log(arg.length)
	return arg
}
console.log(RetLen([1, 2, 3]))
