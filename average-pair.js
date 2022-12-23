// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    if(!arr.length) throw newError("Array cannot be emty!");
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        const avg = (arr[left] + arr[right]/ 2);
        if(avg === targetAvg) {
        return true;
    } else if (avg <targetAvg) {
        left++;
    } else{
        right--;
    }
  }
  return false;
}


// initial attempt 
// function averagePair(arr, targetAvg) {
//     if(!arr.length) throw new Error("Array cannot be empty!");
//       let total = 0;
//       let left = 0;
//       let right = arr.length-1;
//       while(left < right){
//           let sum = arr[left] + arr[right];
//   //       console.log(sum)
//           total = sum / 2;
//         console.log(total)
//           if(total === targetAvg) return true;
//       }
//       return false;
//   }
