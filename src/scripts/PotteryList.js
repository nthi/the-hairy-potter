// Define and export a PotteryList function.

import { usePottery } from "./PotteryCatalog"

export const PotteryList = (potteryToSellArray) => {
    const getArrayToSell = usePottery()
    //I STOPPED HERE 6/24. Figure out how to start html string. don't forget to end tag the string htmlstring +=`</whatever this is>` then return string
//     let htmlString = ``
//     `<section class="pottery" id="pottery--1">
//     <h2 class="pottery__shape">Mug</h2>
//     <div class="pottery__properties">
//         Item weighs 3 grams and is 6 cm in height
//     </div>
//     <div class="pottery__price">
//         Price is $20
//     </div>
// </section>`
}

// The PotteryList function must get the items to be sold from the PotteryCatalog.js module.

// The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
// <section class="pottery" id="pottery--1">
//     <h2 class="pottery__shape">Mug</h2>
//     <div class="pottery__properties">
//         Item weighs 3 grams and is 6 cm in height
//     </div>
//     <div class="pottery__price">
//         Price is $20
//     </div>
// </section>

// The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.
