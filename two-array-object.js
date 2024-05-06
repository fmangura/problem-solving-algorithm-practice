// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    // Assign object
    let obj = {}
    // Iterate through keys
    for (let key of keys) {
        // For each key, add into object and assign the next value from values OR null 
        obj[key] = values.shift() || null
    }
    return obj

}

/**
 * ([key1, key2, key3], [val1, val2, val3]) => { key1: val1, 
 *                                               key2: val2, 
 *                                               key3: val3 }
 * 
 * ([key1, key2], [val1, val2, val3]) => { key1: val1, 
 *                                               key2: val2 }
 * 
 * ([key1, key2, key3], [val1, val2]) => { key1: val1, 
 *                                         key2: val2, 
 *                                         key3: null }
 * 
 * 
 */