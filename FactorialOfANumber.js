let num = window.prompt("Enter a number to check is it a factorial number or not: ");
num = Number(num); //reassigning the value of num by type casting to integer values.
let output = 1;

for(let i=num ; i>0 ; i--){
     output = output * i;
}
console.log("Factorial of : "+num+" is: "+output);