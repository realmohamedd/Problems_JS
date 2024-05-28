// var skills = window.prompt("enter skills");
// var skills = "php";
// if(skills == "php")
// {
//     console.log("learn backend");
// }
// else if(skills == "js")
// {
//     console.log("learn frontend");
// }
// else{
//     console.log("ay 7aga");
// }
// switch(skills )
// {
//     case "php":
//         console.log("learn php");
//         break;
//     case "js":
//         console.log("learn front end")
//         break;
//     default:
//         console.log("ay");
// }
// ------------------------------------------------------------------
// program 1
/*
    var num = window.prompt("Enter num");
    console.log(num);
 */

// program 2
/*
var num = window.prompt("Enter Number For Check");
if(num % 3 == 0 && num % 4 == 0){
    console.log("Yes");
}
else{
    console.log("No");
}
 */

// program 3
/*
var num1 = +window.prompt("Enter Number 1");
var num2 = +window.prompt("Enter Number 2");
if(num1 > num2){
    console.log(num1);
   
}
else if(num2 > num1){
    console.log(num2);
}
else{
    console.log("Both numbers are equal");
}
 */

// program 4
/*
var num = +window.prompt("Enter Number");
if(num < 0){
    console.log("Number Is Negative!")
}
else if(num > 0){
    console.log("Number Positive.");
}
*/

// program 5
/*
var num1 = +window.prompt("Enter Number 1");
var num2 = +window.prompt("Enter Number 2");
var num3 = +window.prompt("Enter Number 3");
if(num1 > num2 && num1 > num3){
    console.log("Max number ", num1);
    if(num2 > num3)
        console.log("min number ", num3);
    else
        console.log("min number ", num2);
}
else if(num2 > num1 && num2 > num3){
    console.log("max number ", num2);
    if(num1 > num3)
        console.log("min number ", num3);
    else
        console.log("min number ", num1)
}
else if(num3 > num1 && num3 > num2){
    console.log("max number ", num3);
    if(num1 > num2)
        console.log("min number ", num2);
    else
        console.log("min number ", num1);
}
else
    console.log("Number Is equal.");
*/

// program 6,7
/* 
var num = +window.prompt("Enter Number For Check?");
if(num % 2 == 0)
{
    console.log("Number Is Even.");
}
else
    console.log("Number Is Odd.");
 */

// program 8
/* 
var char = window.prompt("Enter Charachter");
if(char == 'a' || char == 'A'){
    console.log("Vowel");
}
else if(char == 'e' || char == 'E'){
    console.log("Vowel");
}
else if(char == 'i' || char == 'I'){
    console.log("Vowel");
}
else if(char == 'o' || char == 'O'){
    console.log("Vowel");
}
else if(char == 'u' || char == 'U'){
    console.log("Vowel");
}
else{
    console.log("Consonant");
}
*/

// program 9
/* 
var num = +window.prompt("Enter Number");
for(var i = 1 ; i <= num ; i++){
    console.log(i);
}
*/

// program 10
/*
var num = +window.prompt("Enter Number");
for(var i = 1 ; i<= 12 ; i++){
    console.log(num*i);
} 
*/

// program 11
/*
var num = +window.prompt("Enter Number");
for(var i = 1 ; i <= num ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
} 
*/

// program 12
/* 
var num1 = +window.prompt("Enter Number 1");
var num2 = +window.prompt("Enter Number 2");
console.log(num1**num2);
*/

// program 12
/*
var grade1 = +window.prompt("Enter Subject 1: ");
var grade2 = +window.prompt("Enter Subject 2: ");
var grade3 = +window.prompt("Enter Subject 3: ");
var grade4 = +window.prompt("Enter Subject 4: ");
var grade5 = +window.prompt("Enter Subject 5: ");
var totalMarks = grade1 + grade2 + grade3 + grade4 + grade5;
var averageMarks = totalMarks / 5;

console.log("TotalMarks: "+ totalMarks);
console.log("AverageMarks: "+ averageMarks);
console.log("percentage: "+ averageMarks); 
*/
// program 13
/*
var monthNumber = +window.prompt("Enter Month Number:" );

if(monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12){
    console.log("Days in Month: 31");
}
else if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11){
    console.log("Days in Month: 30");
}
else if(monthNumber == 2){
    console.log("Days in Month: 28");
}
else{
    console.log("Please Enter Months From 1 To 12");
} 
*/
// program 14
/*
var physics = +window.prompt("Enter Mark Physics: ");
var chemistry = +window.prompt("Enter Mark Chemistry: ");
var biology = +window.prompt("Enter Mark Biology: ");
var mathematics = +window.prompt("Enter Mark Mathematics: ");
var computer = +window.prompt("Enter Mark Computer: ");
var percentage = (physics + chemistry + biology + mathematics + computer)/5;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("Grade:", grade); 
*/

// program 15
/*
var month = +window.prompt("Enter month number (1-12):")
if(month >= 1 && month <= 12){
    var daysInMonth;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = 28; 
    }
    console.log(daysInMonth);
}
else{
    console.log("Please Enter Months From 1 To 12");
} 
*/
// program 16
/* 
var char = window.prompt("Enter Charachter for check");
switch(char){
    case 'a':
    case 'A':
        console.log("vowel");
        break;
    case 'e':
    case 'E':
        console.log("vowel");
        break;
    case 'i':
    case 'I':
        console.log("vowel");
        break;
    case 'o':
    case 'O':
        console.log("vowel");
        break;
    case 'u':
    case 'U':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
}
*/

// program 17
/* 
var num1 = +window.prompt("Enter Number 1: ");
var num2 = +window.prompt("Enter Number 2: ");
var max;
switch(true){
    case num1 > num2:
        max = num1;
        break;
    case num2 > num1:
        max = num2;
        break;
    default:
        max = "Numbers equal.";
}
console.log(max);
*/

// program 18
/* 
var num = +window.prompt("Enter Number For Check: ");
switch(num % 2)
{
    case 0:
        console.log("Even");
        break;
    case 1:
        console.log("Odd");
        break;
    default:
        console.log("please enter number");
}
*/

// program 19
/* 
var num = +window.prompt("Enter Number For Check: ");
switch(true){
    case (num < 0):
        console.log("Number negative");
        break;
    case (num == 0):
        console.log("Zero");
        break;
    case (num > 0):
        console.log("Positve");
        break;
    default:
        console.log("please enter number!.");
        break;
}
*/

// program 20

var num1 = +window.prompt("Enter Number 1: ");
var num2 = +window.prompt("Enter Number 2: ");
var oprator = window.prompt("Enter Oprator");
switch(oprator){
    case '+':
        console.log("You Choice Addtion: ", num1 + num2);
        break;
    case '-':
        console.log("You Choice Subtraction: ", num1 - num2);
        break;
    case '*':
        console.log("You Choice Mul: ", num1 * num2);
        break;
    case '/':
        console.log("You Choice Divsion: ", num1 / num2);
        break;
    default:
        console.log("Please Enter Valid number");
}

