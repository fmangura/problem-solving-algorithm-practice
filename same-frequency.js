// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    function freqObj(num){
        num = num.toString().split('')
        let obj = new Map();
        for (let int of num){
            let count = obj.get(int) || 0;
            obj.set(int, count + 1);
        }
        return obj
    };

    num1 = freqObj(num1)
    num2 = freqObj(num2)

    if (num1.length !== num2.length) return false;

    for (let key of num1.keys()){
        if (num2.get(key) !== num1.get(key)) return false;
    }
    return true;
}
