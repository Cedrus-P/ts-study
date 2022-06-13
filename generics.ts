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
// console.log(quene.pop().toFixed())
// console.log(quene.pop().toFixed())

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型在接口的应用
interface KeyPair<T, U> {
	key: T
	value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2:KeyPair<string, number> = {key:'str', value:2}
let arrI: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]

