'use strict';

function insertShiftArray(arr, val) {

    arr[arr.length] = val;
    
    if(arr.length == 1) {
        return arr;
    }

    for(let i = arr.length - 1; i > arr.length/2; i--) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }

    return arr;
}