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

