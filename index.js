// Program to compute on how many years, months, weeks, days are left to b 90
var age = prompt("Enter your age");
//function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

//}
alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left. ");
