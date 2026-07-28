import generateName from "sillyname"
import { randomSuperhero } from 'superheroes';

console.log("_______Silly Names_______")
const sillyName = generateName()
console.log(`My name is: ${sillyName}`)


console.log("")
console.log("_______Super Heroes_______")


const heroes = randomSuperhero()
console.log(`I'm ${heroes}`)