// 空值
let unsable: void = undefined
// null和undefined
let u: undefined = undefined
let n: null = null
// boolean
let isRight: boolean = false
// string
let str: string = 'hello'
let combine: string = `${str} ,how are you`
// number
let num: number = 12
let notNum: number = NaN
let arr: Array<number> = [1, 2, 3]
let arr1: number[] = [4, 5, 6]
let arr2: (number | string)[] = [4, 5, 6, 'asd']
let mix: number | string = 1
let func: (arr: number[]) => number[] = function (arr: number[]) {
	return arr
}
// interface objType {
// 	readonly a: number
// 	b?: number[]
// }
// let obj: objType = {
// 	a: 1,
// 	b: [1]
// }

type GameState = 'pause' | 'running' | 'end'
let gameState: GameState = 'running'

// console.log(str)

interface objType {
	readonly a: number
	b?: number[] //可选属性
	[propName: string]: any //允许拥有任意属性
}
let obj: objType = {
	a: 1,
	b: [1],
	c: 'asd'
}
console.log(obj)

const add: (a: number, b: number) => number = (a, b) => {
	return a + b
}
