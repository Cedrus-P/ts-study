## TS-Learn

### 基本类型

```ts
// 空值
let unsable:void = undefined
// null和undefined
let u:undefined = undefined
let n:null = null
// boolean
let isRight:boolean = false
// string
let str: string = 'hello'
let combine:string = `${str} ,how are you`
// number
let num: number = 12
let notNum:number = NaN  

// 数组
let arr: Array<number> = [1, 2, 3]
let arr1: number[] = [4, 5, 6]
// 接口表示数组
interface NumberArray {
    [index: number]: number
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
// 联合数组
let arr2: (number | string)[] = [4, 5, 6, 'asd']
// any数组：数组中可以出现任意类型
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]

let mix: number | string = 1

// 函数
let func: (arr: number[]) => number[] = function (arr: number[]) {
	return arr
}

// 接口对象
interface objType {
	readonly a: number
	b?: number[]
}
let obj: objType = {
	a: 1,
	b: [1]
}

type GameState = 'pause' | 'running' | 'end'
let gameState: GameState = 'running'
```

### Any

```ts
let num:any = 'five'
num = 7

//可以访问任何属性
let anyT:any = '123'
anyT.myName
//可以调用任何方法
anyT.setName('aya')
```

**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**

#### 未声明类型的变量

- **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**

### 类型推论

根据第一次赋值给定类型，如果多次不同类型赋值，就会被推断为any。

### 联合类型

```ts
let num:string | number
num = 'seven'
num = 7
num = true //报错
```

- 只能调用共有属性的方法（交集）

- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber.length // 5
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错
```

### 接口

```ts
interface objType {
	readonly a: number	//只读属性
	b?: number[] //可选属性
    [propName: number]: any	//允许拥有任意属性
}
let obj: objType = {
	a: 1,
	b: [1]
}
```

- **一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

- `readonly`只读属性

### 函数

```ts
let func: (arr: number[]) => number[] = function (arr: number[]) {
	return arr
}
```

#### 接口定义函数的形状

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

#### 重载

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

- 多次定义，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要**优先把精确的定义写在前面**。



### 类型断言`Type Assertion`

```ts
值 as 类型
<类型>值
```

#### 用途

- 将一个联合类型断言为其中一个类型，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
- 将一个父类断言为更加具体的子类


