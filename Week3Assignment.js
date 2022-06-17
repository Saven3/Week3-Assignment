let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);


let val1;
let val2;

ages.push(11);

for(i = 0; i < ages.length; i++){
    if(i == 0){

        val1 = ages[i];
    }
        
    if(i == ages.length - 1){

        val2 = ages[i];
    }            
} 

 
console.log(val2 - val1);



let sum = 0;

for(averageAge of ages){
    sum += averageAge;
}

averageAge = sum / ages.length;

console.log(averageAge);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

let averageLetters = 0;

for(average of names){
    averageLetters += average.length;
}
    average = averageLetters / names.length;

    console.log(average); 




let name1 = "";

for(i = 0; i < names.length; i++){
    
    if(i == names.length){
        name1 += names[i];
    } 
    else name1 += names[i] + " "
} console.log(name1);

console.log(names[names.length - 1]);

console.log(names[0]);



let nameArray = ['Kelly', 'Sam', 'Kate'];
let nameLengths = [];


for(i = 0; i < nameArray.length; i++){
    nameLengths[i] = nameArray[i].length;
} console.log(nameLengths);


nameSum = 0;

for(i = 0; i < nameLengths.length; i++){
    nameSum += nameLengths[i];
} console.log(nameSum);


function wordn(word, n){
    let theString = "";
    for(i = 0; i < n; i++){
        
        theString += word;

    }

    return theString;
} console.log(wordn('Yokudekita', 3));



function namae(firstNamae, lastNamae){

    console.log(firstNamae + ' ' + lastNamae);

}
    namae('Maikeru', 'Jorii');



function numberArray(theArray){
    let sum = 0;
    for(i = 0; i < theArray.length; i++){
    sum += theArray[i];
    if(sum >= 100){
        return true;
        
}
else return false;
    }
}
    console.log(numberArray(ages));




let numAr = [7, 3, 10, 15, 2];

function avArray(numAr){
    let summ = 0
    for(i = 0; i < numAr.length; i++){
        summ += numAr[i]
    }
    let averageNumbs = summ / numAr.length;
    return averageNumbs
}console.log(avArray(numAr));



let newArray1 = [1, 6, 7, 2, 10];
let newArray2 = [9, 4, 6, 16, 3];

function twoArrayAv(newArray1, newArray2){
    let sumOne = 0;
    let sumTwo = 0;

    for(i = 0; i < newArray1.length; i++){
        sumOne += newArray1[i];
    }
    for(i =0; i < newArray2.length ; i++){
        sumTwo += newArray2[i];
    }

    let averagesOne = sumOne / newArray1.length;

    let averagesTwo = sumTwo / newArray2.length;

    if(averagesOne > averagesTwo){
        return true;
    }
    else return false;
}console.log(twoArrayAv(newArray1, newArray2));




function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    else return false;
}console.log(willBuyDrink(true, 11));




//I play a lot of trading card games so the first thing that came to mind was sorting cards but I didnt want to do the typical A-Z. I thought it would be neat to sort by Longest name. So this is my example.

function whichCardNameLonger(card1, card2){
    if(card1.length > card2.length){
        console.log('Card1 is longer');
    }
    else if(card2.length > card1.length){
        console.log('Card2 is longer');
    }
    else{
        console.log('They are the same length.');
    }
} console.log(whichCardNameLonger('Kizan', 'Kageki'));
