import { db } from "../lib/db"

const insertEntry = () => {
  db.insert({name: 'John', food: 'Freeze-dried Apples'}).into('party').query()
}

const Button = () => {
  return <button onClick={() => insertEntry()}>Add John</button>
}

export default Button