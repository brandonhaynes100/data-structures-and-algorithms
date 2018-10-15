'use strict';

const binarySearch = (array, searchKey) => {
  if(array.length == 0 
    || searchKey < array[0] 
    || searchKey > array[array.length - 1]) {
    return -1;
  }

  if(array.length == 1) {
    if(array[0] == searchKey) {
      return 0;
    } else {
      return -1;
    }
  }
  return helperFunction(array, searchKey, 0, array.length);
};

const helperFunction = (array, searchKey, startIndex, endIndex) => {
  // recalculate middleIndex based on this iteration's startIndex and endIndex
  let middleIndex = startIndex + ((endIndex - startIndex) / 2);
  // truncate any decimal places
  middleIndex = middleIndex - middleIndex % 1;

  if(searchKey > array[middleIndex]) {
    // value is higher, check top half
    return helperFunction(array, searchKey, middleIndex, endIndex);
  } else if(searchKey < array[middleIndex]) {
    // value is lower, check bottom half
    return helperFunction(array, searchKey, startIndex, middleIndex);
  } else if(searchKey == array[middleIndex]) {
    return middleIndex;
  } else {
    return -1;
  }
};