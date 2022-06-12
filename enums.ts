// 常量枚举
const enum Direction {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right'
}
// console.log(Direction.Left)
// console.log(Direction[3])
const value = 'Up'
if (value === Direction.Up) {
	console.log('up')
}

// declare enum xxx
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];