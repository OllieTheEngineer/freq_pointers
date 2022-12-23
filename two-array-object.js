// add whatever parameters you deem necessary
// create a function that accepts two arrays
// one array of keys one array of values
function twoArrayObject(arrKeys, arrVals) {
    // function should return a object
    let newObj ={};
    for(let i = 0; i < arrKeys.length; i++){
        newObj[arrKeys[i]] = arrVals[i];
    }
    return newObj
}
