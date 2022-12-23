// add whatever parameters you deem necessary
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

function constructNote(msg, ltrs) {
    let msgFreq = createFrequencyCounter(msg);
    let ltrsFreq = createFrequencyCounter(ltrs);

    for(let char in msgFreq) {
        if(!ltrsFreq[char]) {
            return false
        }
        if(msgFreq[char] > ltrsFreq[char]) {
            return false;
        }
    }
    return true;
}
