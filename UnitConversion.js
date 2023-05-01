
let select = window.prompt("select : 1. Feet to Inch \n 2.Inch to Feet \n 3.Feet to Meter \n 4.Meter to Feet");
select = Number(select);

switch (select){  //switch case in javaScript
    case 1 :
        let input = window.prompt("Enter length in Feet :");
        input = Number(input);
        let output = input * 12;
        console.log("Lenght in Inch : ",output);
        break
    case 2 : 
        let input2 = window.prompt("Enter length in Inch :");
        input2 = Number(input2);
        let output2 = input / 12;
        console.log("Lenght in Feet : ",output);
        break
    case 3 :
        let input3 = window.prompt("Enter length in Feet :");
        input3 = Number(input3);
        let output3 = input * 0.3048;
        console.log("Lenght in Meter : ",output);
        break
    case 4 :
        let input4 = window.prompt("Enter length in Meter :");
        input4 = Number(input4);
        let output4 = input * 3.2808
        console.log("Lenght in Feet : ",output);
        break
    default:
        console.log("Invalid Input.")
}