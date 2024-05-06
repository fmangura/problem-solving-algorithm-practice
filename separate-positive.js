// add whatever parameters you deem necessary
function separatePositive(arr) {
    // Make left and right marker
    let left = 0;
    let right = arr.length-1
    // While left and right marker are not the same:
    while (left < right) {
        // Check if they're correctly pos-left or neg-right
        if (arr[left] < 0 && arr[right] > 0) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }

        if (arr[left] > 0) left++;
        if (arr[right] < 0) right--;
    }
    
    return arr;
}
