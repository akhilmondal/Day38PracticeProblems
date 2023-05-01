

let array = [];  //declaring an array in js
    
for(var i=1 ; i<=5 ; i++){
    var numbers = Math.ceil(Math.random()*899)+100;  //generating random numbers between 0-100;
    array.push(numbers); // Adding the generated random numbers to the array
}
console.log("Three digits 5 random numbers are: ",array);

let maximum = Math.max(...array);     //... spread operator.
let minimun = Math.min(...array);

console.log("Maximum number :",maximum);
console.log("Minimum number :",minimun);


/*
spread operator (...)
----------------------
-if values is an array with the elements [5, 2, 9, 1, 7], then Math.min(...values) is equivalent to calling Math.min(5, 2, 9, 1, 7). 
Similarly, Math.max(...values) is equivalent to calling Math.max(5, 2, 9, 1, 7).

-Using the spread operator in this way is a convenient way to find the minimum or maximum value in an array
without having to use a loop or other iteration construct.
*/