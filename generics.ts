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

// 泛型在类的应用
const Gobj = RetLen({ length: 10, width: 10 })
const Garr = RetLen([1, 2, 3])

class Quene<T> {
	private data = []
	push(item: T) {
		return this.data.push(item)
	}
	pop(): T {
		return this.data.shift()
	}
}
const quene = new Quene<number>()
quene.push(1)
// quene.push('str')
console.log(quene.pop().toFixed())
console.log(quene.pop().toFixed())

// 泛型在接口的应用