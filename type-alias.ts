// type alias
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
	if (typeof n === 'string') {
		return n
	} else {
		return n()
	}
}
const name1: NameResolver = () => 'mike'
console.log(getName(name1))

// 字面量
const strZ: 'name' = 'name'
const number: 1 = 1

// 交叉类型
interface Iname {
	name: string
}
// 加上去，交叉组合时使用type
type IPerson = Iname & { age: number }
let person: IPerson = { name: '123', age: 23 }
