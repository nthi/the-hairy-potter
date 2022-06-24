// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 4)
let plate = makePottery("plate", 3, 6)
let stein = makePottery("stein", 10, 9)
let vase = makePottery("vase", 25, 22)
let bowl = makePottery("bowl", 20, 6)
//console.log(mug)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1500)
// console.log(firedMug)

let firedPlate = firePottery(plate, 3000)
// console.log(firedPlate)

let firedStein = firePottery(stein, 1200)
// console.log(firedStein)

let firedVase = firePottery(vase, 2100)
// console.log(firedVase)

let firedBowl = firePottery(bowl, 1855)
// console.log(firedBowl)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedStein)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedBowl)
let sellList = usePottery()
console.log(sellList)



// Invoke the component function that renders the HTML list



