
let number = window.prompt("Enter a number to check whether it is prime or not :");
let num = Number(number);
let count = 0;

for(let i=2 ; i<num ; i++){
    if(num % i == 0){
        count++;
    }
}
if(count == 0){
    console.log(input," is a Prime Number.");
}else{
    console.log(input," is not a Prime Number")
}