// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    left = 0;
    right = arr.length - 1;

    while (left < right){
        if ((arr[left] + arr[right]) == (avg*2)) return true;

        if ((arr[left] + arr[right]) > (avg*2)){
            right--;

        } else if ((arr[left] + arr[right]) < (avg*2)){
            left++;
        }
    }
    return false;
}