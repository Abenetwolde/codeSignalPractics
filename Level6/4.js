function ArrayReplace(/* inputArray, elemToReplace, substitutionElem */) {
let animals=[{type:"lion"}, "tiger"]
let clones= animals.slice()
clones[0].type="bear"
clones[1]="sheap"

console.log(animals[0].type, clones[0].type)
console.log(animals[1], clones[1])
    }
   ArrayReplace(/* [1, 2, 1],1,3 */)