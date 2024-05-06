// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // Make markers for each string
    let mark1 = 0;
    let mark2 = 0;
    while (true){
        // If markers match, move BOTH markers up, else move str2 marker up
        if (str1[mark1] == str2[mark2]) {
            mark1++;
            mark2++;
        } else {
            mark2++;
        }
        // If str1 marker >= str1.length, return true
        if (mark1 >= str1.length) return true;
        // If str2 marker >= str2.length, return false
        if (mark2 >= str2.length) return false;
    }
}

/**
 * Is str1 in str2 in str1 *order* but not necessarily side by side
 */
