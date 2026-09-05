
// problem 1 
// var UserName = prompt("please enter your name");
// var UserAge = prompt("please enter your age");

// console.log("Hello " + UserName + "! You are " + " " + UserAge + " years old and you were born around " + (2026 - UserAge) );


// problem2
// var Currency = prompt("please enter amount in egp");

// var EGP = Currency; 

// var USD = 47.22 ;
// var EUR = 54.35 ;
// var GBP = 61.95 ;

// console.log(  EGP + " EGP = $" + (EGP / USD).toFixed(2) + " USD, " +"€" + (EGP / EUR).toFixed(2) + " EUR, " +"£" + (EGP / GBP).toFixed(2) + " GBP" );


// problem 3 
// var Num = prompt("please enter a number to ckeck it ")

// if( Num % 2 == 0)
// {
// console.log( Num + " " + "is an even number ");
// }
// else if(Num % 2 == 1)
// {
//     console.log(  Num + " " + "is an odd number ");
    
// }
// else
// {
// console.log("enter a valid number");

// }


// problem 4
// var Hour = prompt("enter an hour between 0 - 23");

// if( Hour<11 )
// {
// console.log("Good morning!");
// }
// else if (Hour = 12 && Hour <= 17)
// {
// console.log("Good afternoon!");
// }
// else if (Hour = 18 && Hour <= 23)
// {
// console.log("Good evening!");
// }
// else
// {
// console.log("enter an hour between 0 - 23 ");
// }


// problem 5

// var Score1 = Number(prompt("enter score1 to check if you passed "));
// var Score2 = Number(prompt("enter score2 to check if you passed "));
// var Score3 = Number(prompt("enter score3 to check if you passed "));


// var AVG = (Score1+Score2+Score3) / 3;

// if(AVG < 50)
// {
// console.log("Average: " + AVG.toFixed(2) +  ", Status: " + "Fail");

// }
// else if(AVG >= 50 )
// {
// console.log("Average: " + AVG.toFixed(2) +  ", Status: " + "Pass" );
// }
// else
// {
// console.log("enter valid number");
// }


// problem 6

// var num1 = Number(prompt("enter 1st num  "));
// var num2 = Number(prompt("enter 2nd num "));
// var operator = prompt("enter operator ");

// switch(operator)
// {
//     case "+" :
//         console.log( num1 + " + " + num2 + " = " +  (num1 + num2) );
//         break;

//     case "-" :
//         console.log( num1 + " - " + num2 + " = " +  (num1 - num2) );
//         break

//     case "/" :
//         console.log( num1 + " / " + num2 + " = " +  (num1 / num2) );
//         break;

//     case "*" :
//         console.log(num1 + " * " + num2 + " = " +  (num1 * num2) );
//         break;

//     default :
//     console.log("wrong operator"); 
// }


// problem 7 

//  var num = Number(prompt("enter a number "));


// for(var i = 1; i<=10; i++)
// {
//     console.log(num + " x " + i + " = " + (num * i) + "\n");
    
// }
 
// problem 8

//  for(var i = 2; i<=10; i+= 2)
// {
//      console.log(i);
// }

// problem 9 


// var result = 1 ;

// for ( var i = 1 ; i<=5 ; i++  ){
// result = result * i;
// }
// console.log(result)

// problem 10

// var n = 1;

// while (n * n <= 50) {
//     n++;
// }

// console.log(n);

// problem11
// var num1 = Number(prompt("enter 1st num"));
// var num2 = Number(prompt("enter 2nd num"));

// num1 = num1 + num2;
// num2 = num1-num2;
// num1 = num1-num2; 

// console.log("After Swapping: " + "num1=" + num1 +  ", " + "num2=" + num2 );


// problem 12 
// var UserAge = Number(prompt("enter your age "));
// var Ticket = prompt("are you have a ticket ? ");

// if(UserAge >= 18 || (Ticket  ==  "yes"))
// {
// console.log( "Access granted: " + "true" );
// }
// else 
// {
// console.log("Access granted: " + "false");
// }

// problem13

// var a = Number(prompt("enter your 1st num "));
// var b = Number(prompt("enter your 2nd num "));
// var c = Number(prompt("enter your 3rd num "));

// var max;

// if(a >= b && a > c )
// {
// max = a;
// }
// else
// {

//     if (b > a && b > c)
// {
//      max =b;
// }
//  else if (c > a && c > b)
// {
// max = c ;
// }
// }

// console.log("Largest number is: " + max );


// problem14
// var Hours = Number(prompt("enter your hours number "));
// var Rate = Number(prompt("enter your rate "));

// var Regular = Math.min(Hours, 40) * Rate;
// var Overtime =Hours - 40;
// var total

// if(Hours > 40 ){
//     Overtime = (Hours - 40) * Rate * 1.5 ;
// }
// else{
// Overtime = 0 ;
// }
//  total = Regular + Overtime;

//  console.log("Regular: " + "$"+ Regular + ", " +  "Overtime: " + "$" +  Overtime + ", " +  "Total: $" + total);

// problem15
// var Weight = Number(prompt("enter your weight "));
// var height = Number(prompt("enter your height "));

// var BMI = (Weight/(height*height));

// if (BMI<18.5){
//     console.log(  "BMI: " + BMI.toFixed(2) +  " - "  +"Under weight");  
// }
// else if (BMI>=18.5 && BMI<=24.9)
// {
//     console.log(  "BMI: " + BMI.toFixed(2) +  " - "  +"Normal weight");
// }
// else if (BMI>=25 && BMI<=29.9 )
// {
//     console.log(  "BMI: " + BMI.toFixed(2) +  " - "  +"Overweight");
// }
// else if (BMI>=30)
// {
//     console.log(  "BMI: " + BMI.toFixed(2) +  " - "  +"Obese");
// }
// else{
//     console.log("enter valid numbers");
    
// }

// problem16
// var Amount = Number(prompt("enter your Amount "))
// var Tax = Amount * 0.1;
// var Discount = Amount * 0.05;
// var Final = Amount + Tax - Discount ;
// var FinalWitoutDiscount = Amount + Tax  ;
// NoDiscount = 0;

// if (Amount>100){
//     console.log("Subtotal: " + "$" + Amount + ", Tax: " + "$" +   Tax + ", " + "Discount: " + "$" +  Discount + "," + " Final: $" + Final ); 
// }
// else {
//     console.log("Subtotal: " + "$" + Amount + ", Tax: "  + "$"  + Tax + ", " + "Discount: " + "$" +   NoDiscount  + "," + " Final: $" + FinalWitoutDiscount); 
// }


// problem 17 
// var Operation = Number(prompt("enter your operation number"));
// var amount;

// if (Operation === 2 || Operation === 3) {
//     amount = Number(prompt("enter your amount "));
// }

// var currentBalance = Number(prompt("enter your currentBalance"));

// switch (Operation) {
//     case 1:
//         console.log("Your balance is: " + "$" + currentBalance);
//         break;
//     case 2:
//         if (amount > currentBalance) {
//             console.log("Insufficient funds. Your balance is: " + "$" + currentBalance);
//         } else {
//             console.log("Withdrew " + "$" + amount + ". " + "New balance: " + "$" + (currentBalance - amount));
//         }
//         break;
//     case 3:
//         console.log("Deposited " + "$" + amount + ". " + "New balance: " + "$" + (currentBalance + amount));
//         break;
//     default:
//         console.log("Invalid operation");
//         break;
// }


// problem18 
// var result = "";

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         result += "FizzBuzz ";
//     } else if (i % 3 === 0) {
//         result += "Fizz ";
//     } else if (i % 5 === 0) {
//         result += "Buzz ";
//     } else {
//         result += i + " ";
//     }
// }
// console.log(result.trim());

// problem19

// var n = Number(prompt("Enter number of rows:"));
// var result = "";

// for (var i = 1; i <= n; i++) {

//     for (var j = 1; j <= i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);