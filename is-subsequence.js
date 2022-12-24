// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    if(!string1 || !string2){
        return fales;
    }

    stringArray2 = [];
    string1Object = {};
    
    for(char in string1){
        if(char !== string1[char]){
            string1Object[char]++;
        } else{
            string1Object[char]+=1;
        }
    for(char in string2){
        if(char === string1Object[char]) {
            string1Object[char]-=1;
            if(string1Object[char] === 0){
                delete string1Object[char];
                stringArray2.push(char);
            }
        }
        }
        return string1 === stringArray2.join("")
    }
}
