// add whatever parameters you deem necessary
function constructNote(msg, chars) {
    //check if there's enough letters in chars
    if (chars.length < msg.length) return false
    // make an object or map of both msg and chars with letter frequency
    function makeFreq(str) {
        let freq = {};
        for (let char of str){
            freq[char] = (freq[char] + 1) || 1;
        }
        return freq;
    }

    msg = makeFreq(msg);
    chars = makeFreq(chars);

    for (let key of Object.keys(msg)){
        if (!chars[key]) return false;
        if (chars[key] < msg[key]) return false;
    }

    return true;
    //check if msg's characters are in chars with the same frequency

}
