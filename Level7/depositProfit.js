function depositProfit(deposit, rate, threshold){
    // const yearGap= threshold-deposit
    // const raten= deposit*rate/100
    // const result=  Math.floor(yearGap/raten)
    // return result
    let years = 0;
    while (deposit < threshold) {
        deposit += deposit * (rate / 100);
        // deposit *= (1 + (rate / 100));
        years++;
    }
    return years;
}
console.log(depositProfit(100,20,170))