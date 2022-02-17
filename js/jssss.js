function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please give a number';
    }
    let perVori = 16;
    let resultanaToVori = ana / perVori;
    return resultanaToVori;
}
const totalVori = anaToVori(16);
console.log(totalVori);
// pandaCost
function pandaCost(singara, somocha, jilaphi) {
    if (typeof singara != 'number') {
        return 'Please order a pandaCost Food';
    }
    if (typeof somocha != 'number') {
        return 'Please order a pandaCost Food';
    }
    if (typeof jilaphi != 'number') {
        return 'Please order a pandaCost Food';
    }
    const singaraRet = 7;
    const somochaRet = 10;
    const jilaphiRet = 15;
    singaraPrice = singara * singaraRet;
    somochaPrice = somocha * somochaRet;
    jilaphiPrice = jilaphi * jilaphiRet;
    var tutalPrice = singaraPrice + somochaPrice + jilaphiPrice;
    return tutalPrice;
}
var tutalFood = pandaCost(1, 1, 1);
console.log(tutalFood)
// //picnicBudge
function picnicBudget(miles) {
    if (typeof miles != 'number') {
        return 'Please picnic and how many people give his number';
    }
    const firstBudgetPeople = 5000;
    const secontBudgerPeople = 4000;
    const thirdBudgerPeople = 3000;
    if (miles <= 100) {
        const count = miles * firstBudgetPeople;
        return count;
    }
    else if (miles <= 200) {
        const first100 = 100 * firstBudgetPeople;
        const restMiles = miles - 100;
        const secondcound = restMiles * secontBudgerPeople;
        const count = first100 + secondcound;
        return count;
    }
    else {
        const first100 = 100 * firstBudgetPeople;
        const secondcound = 100 * secontBudgerPeople;
        const restMiles = miles - 200;
        thirdcount = restMiles * thirdBudgerPeople;
        count = first100 + secondcound + thirdcount;
        return count;
    }
}
var tutalPeople = picnicBudget(250);
console.log(tutalPeople);
//oddFriends
function oddFriend(friendarray) {
    if (friendarray == "") {
        return "There isnot any odd friend";
    }
    if (friendarray == "number") {
        return "There isnot any odd friend";
    }
    let oddFriend = "";
    for (friend of friendarray) {
        if (friend.length % 2 != 0) {
            oddFriends = friend;
            return oddFriends;
        }
    }
}
console.log(oddFriend(['Anik', 'Ashik', 'Suba', 'Nisu']));