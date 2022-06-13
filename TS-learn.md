# TS-Learn

### 基本类型

```typescript
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

```typescript
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

```typescript
let num:string | number
num = 'seven'
num = 7
num = true //报错
```

- 只能调用共有属性的方法（交集）

- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```typescript
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber.length // 5
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错
```

### 接口

```typescript
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

```typescript
let func: (arr: number[]) => number[] = function (arr: number[]) {
	return arr
}
```

#### 接口定义函数的形状

```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

#### 重载

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
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



### `Type Guard`用`typeof`缩小范围


```typescript
// type guard
function getLen2(input: string | number):number{
	// 缩小类型范围
	if(typeof input === 'string'){
		return input.length
	} else{
		return input.toString().length
	}
}
```



## `Enums`枚举

```typescript
enum Direction {
	Up,
	Down,
	Left,
	Right
}
console.log(Direction.Left)	// 2
console.log(Direction[0])		// Up
```

编译后：实现双向赋值。

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h35fs8qbl1j20qs0c2jtb.jpg" alt="279BED06-F9D9-4515-A91C-A86486CACD33" style="zoom:50%;" />



### 常量枚举

> - 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。假如包含了计算成员，则会在编译阶段报错。
>
> - 只有常量值可以进行常量枚举。

```typescript
const enum xxx{} // 常量枚举
```

编译后：

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h35fxz6cy3j20og05i74m.jpg" alt="5BA473DF-8B0B-4CB1-8003-B85104374607" style="zoom:50%;" />

### 外部枚举

```typescript
// declare enum xxx
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

编译后：

```typescript
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```



## 泛型`Generics`

### 约束泛型`entends`

```typescript
interface IWithLen {
	length: number
}
// extends 约束
function RetLen<T extends IWithLen>(arg: T): T {
	console.log(arg.length)
	return arg
}
```

### 泛型在类和接口的使用

```typescript
// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// 泛型接口
interface KeyPair<T, U> {
	key: T
	value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2:KeyPair<string, number> = {key:'str', value:2}
```

## 类型别名，字面量和交叉类型

```typescript
// 类型别名
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
// 字面量
const strZ: 'name' = 'name'
const number: 1 = 1
/ 交叉类型
interface Iname {
	name: string
}
// 加上去，交叉组合时使用type
type IPerson = Iname & { age: number }
let person: IPerson = { name: '123', age: 23 }
```

**在用到别名或者交叉组合时用`type`，遇到类和接口用`interface`**



## 项目中的typescript

`xxx.d.ts`：没有任何的实际代码的实现，只有类型声明（interface、function、class等）。

[TypeSearch](https://www.typescriptlang.org/dt/search?search=)：安装第三方库是否需要下载对应的类型文件。

>- [`declare var`](https://ts.xcatliu.com/basics/declaration-files.html#declare-var) 声明全局变量
>- [`declare function`](https://ts.xcatliu.com/basics/declaration-files.html#declare-function) 声明全局方法
>- [`declare class`](https://ts.xcatliu.com/basics/declaration-files.html#declare-class) 声明全局类
>- [`declare enum`](https://ts.xcatliu.com/basics/declaration-files.html#declare-enum) 声明全局枚举类型
>- [`declare namespace`](https://ts.xcatliu.com/basics/declaration-files.html#declare-namespace) 声明（含有子属性的）全局对象
>- [`interface` 和 `type`](https://ts.xcatliu.com/basics/declaration-files.html#interface-和-type) 声明全局类型
>- [`export`](https://ts.xcatliu.com/basics/declaration-files.html#export) 导出变量
>- [`export namespace`](https://ts.xcatliu.com/basics/declaration-files.html#export-namespace) 导出（含有子属性的）对象
>- [`export default`](https://ts.xcatliu.com/basics/declaration-files.html#export-default) ES6 默认导出
>- [`export =`](https://ts.xcatliu.com/basics/declaration-files.html#export-1) commonjs 导出模块
>- [`export as namespace`](https://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace) UMD 库声明全局变量
>- [`declare global`](https://ts.xcatliu.com/basics/declaration-files.html#declare-global) 扩展全局变量
>- [`declare module`](https://ts.xcatliu.com/basics/declaration-files.html#declare-module) 扩展模块
>- [`/// `](https://ts.xcatliu.com/basics/declaration-files.html#san-xie-xian-zhi-ling) 三斜线指令

