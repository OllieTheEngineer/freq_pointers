// // add whatever parameters you deem necessary
// function createFrequencyCounter(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++)
//     {
//         for(let j = 0; j < str.length; j++)
//         {
//             if(str[i] == str[j])
//             {
//                 count++;
//             }
//         }
//     }
//     return count;
//   }


// function sameFrequency(num1, num2) {
//     let num1Freq = createFrequencyCounter(num1);
//     let num2Freq = createFrequencyCounter(num2);
//     if(num1Freq == num2Freq)
//     {
//         console.log(true);
        
//     }
//     else
//     {
//         console.log(false);
//     }
// }

// function createFrequencyCounter(str,str1) {
//     let count = 0;
//   str = str.toString();
//   str1 = str1.toString();
//     for(let i = 0; i < str.length; i++)
//     {
//         for(let j = 0; j < str.length; j++)
//         {
//             if(str[i] == str[j])
//             {
//                 count++;
//             }
//         }
//     }
//   console.log(count)
//     let count2 = 0;
//     for(let i = 0; i < str1.length; i++)
//     {
//         for(let j = 0; j < str1.length; j++)
//         {
//             if(str1[i] == str1[j])
//             {
//                 count2++;
//             }
//         }
//     }
//   console.log(count2)
//     return count==count2;
//   }


// function sameFrequency(num1, num2) {
//     let num1Freq = createFrequencyCounter(num1,num2); 
//     console.log(num1Freq);
// }
function createFrequencyCounter(str) {
    let frequencies = new Map();
  
    for (let val of str) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
  }


function sameFrequency(num1, num2){
    let num1Str = num1.toString()
    let num2Str = num2.toString()
    if(num1.length !== num2.length) throw new Error('Not the same length!');

    const num1Freq = createFrequencyCounter(num1Str);
    const num2Freq = createFrequencyCounter(num2Str);
    if(num1Freq.size !== num2Freq.size) return false;
    for(let nums of num1Freq.keys()) {
        if(num2Freq.get(nums) !== num1Freq.get(nums)) return false;
    }
    return true;
}