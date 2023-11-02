export type User = {
  id: Id<'User'>
  name: string
  email: string
  picture: string
  age: number
  bloodType: string // REFACTOR: リテラル型にする
}
