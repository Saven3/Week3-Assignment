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