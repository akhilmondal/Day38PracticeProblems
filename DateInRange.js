let month = window.prompt("Enter Month in numbers:");
let day   = window.prompt("Enter date in number :");
month = Number(month);
day = Number(day);

if((month == 3 && day >= 20 && day <= 31) //These are the conditions to check the date is within the range or not.
 ||(month == 4 && day >= 1 && day <= 30)
 ||(month == 5 && day >= 1 && day <= 31)
 ||(month == 6 && day >= 1 && day <= 20)){
    console.log("The date is within the range: ")
    console.log("True");
}else{
    console.log("The date is not within the range: ")
    console.log("false");
}