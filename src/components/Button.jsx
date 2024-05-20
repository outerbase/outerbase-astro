import { db } from "../lib/db"

const insertEntry = () => {
  db.insert({name: 'John', food: 'Freeze-dried Apples'}).in('party').query()
}

const Button = () => {
  return <button onClick={() => insertEntry()}>Add John</button>
}

export default Button