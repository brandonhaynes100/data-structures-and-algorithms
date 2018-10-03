'use strict';

function reverseArray(arr) {

    let tempArr = [];

    for(let i = arr.length; i > 0; i--) {
        tempArr.push(arr.pop());
    }

    for(let i = 0; i < tempArr.length; i++) {
        arr.push(tempArr[i]);
    }

    return arr;
}