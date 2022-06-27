
// Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.

const potteryToSell = []

// Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.
export const toSellOrNotToSell = (firedPotteryObject) => {
    //this is failing the test "piece is not priced when cracked"
    //get eyes on it
    if (firedPotteryObject.cracked === true) {
        firedPotteryObject.price = false
    } //I've also tried .price = "" (as in no price just empty string)
    //but it also failed.
    else if (firedPotteryObject.weight >= 6) {
        firedPotteryObject.price = 40
    } 
    else {
        firedPotteryObject.price = 20
    }


    if (firedPotteryObject.cracked === false) {
        potteryToSell.push(firedPotteryObject)
    }
    
    return firedPotteryObject
}

export const usePottery = () => {
    return potteryToSell.map(pot => ({...pot}))
}

// The toSellOrNotToSell function must accept a pottery object as input.

// If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.

// If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.

// If the pottery is not cracked, add the object to the module-level array of items to be sold.

// Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

//from previous project: return database.fish.map(fish => ({...fish}))