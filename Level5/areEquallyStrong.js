function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
const myHand=yourLeft+yourRight
const myFrindHand=friendsLeft+friendsRight
// if(myHand===myFrindHand){return true;}

return myHand===myFrindHand;
}

console.log(areEquallyStrong (12, 10, 11,11))