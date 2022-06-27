// Define and export a PotteryList function.

import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const getArrayToSell = usePottery()
    //console.log(getArrayToSell)

    //should i just be using `` and no article container? I started adding it because it wasn't working without, buuuut still not working so i'm just throwing stuff at it until something works
    let htmlString = ``
    
    for (const pot of getArrayToSell) {
        //is id in the next line a "pottery--${pot.id}" moment?
        htmlString +=     `<section class="pottery" id="pottery--${pot.id}">
        <h2 class="pottery__shape">${pot.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pot.price}
        </div>
    </section>`
    }


//idk i've tried with adding an article to the htmlString and also without 
    return htmlString

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
