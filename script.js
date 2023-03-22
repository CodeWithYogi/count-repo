const responseOne = document.getElementById('responseOne')
const responseTwo = document.getElementById('responseTwo')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', ()=>{
    const input = document.getElementById('input').value;
    responseOne.innerHTML = JSON.stringify(countAmountOfEachCharacter(input))
    responseTwo.innerHTML = JSON.stringify(countAmountOfWords(input))
})

const countAmountOfEachCharacter=(inputString)=>{
    const returnObj = {};
    const stringVal = inputString.split('').filter(x => x !== " ");

    // loop over the input string 
    for(const character of stringVal){
        if(returnObj.hasOwnProperty(character)){
            returnObj[character] += 1;
        }else {
            returnObj[character] = 1;
        }
    }
    
    // loop over the input string 
    for(const val of Object.keys(returnObj)){
        let charType = val.toUpperCase() === val ? "Capital" : "Small";
        returnObj[val] = returnObj[val] +" "+charType;
    }
    return returnObj;
}
const countAmountOfWords=(inputString)=>{
    const returnObj1 = {};
    let newString = inputString.split(' ');
    
    for(const character of newString){
        if(returnObj1.hasOwnProperty(character)){
            returnObj1[character] += 1;
        }else{
            returnObj1[character] = 1
        }
    }
    return returnObj1
}

