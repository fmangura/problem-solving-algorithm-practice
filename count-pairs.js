// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let total = 0;

while(arr.length > 0){
    let curr = arr.pop()
    let sumPart = num - curr;
    console.log(sumPart)
    if (arr.includes(sumPart)) total++;
}
    console.log(total)
    return total;
}

countPairs([4, 6, 2, 7], 10)
/**
 * 
 * input: array, number
 * output: a count of how many pairs
 */