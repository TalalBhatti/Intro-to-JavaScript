// All invokes
basicAlert();
handlingString();
increment();
takingInput();
checkLicense();
forLoop();
pyramid();
arrayTest();
dice();
greetings("Morning");
var answer = multiple(2,2.5);
var answer1 = sum(2,9);
console.log(answer);

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);
console.log(value);

function basicAlert(){
alert("Hello")
console.log("Hello World");
}

function handlingString(){
var age = 12;
var room = 10 ;
console.log(age);
// add room and age (++age 
// and age++)
var newAge = ++age;
console.log(age);
console.log(newAge);
}



function increment(){
var a = 4;
var b = 3;
var c = ++a + b++ -a + b--;
alert(c)
}


function takingInput(){
var question = "What is your name?";
var defaultAnswer = "Talal";
var age = prompt(question)
var sum = parseInt(age) + 5
console.log("Sum =" +  sum);
}

function checkLicense(){
var question = "How old are you";
var age = prompt(question);
console.log(typeof age);
if(age === "18"){
    var Id = prompt("Valid id?")

    if(Id === "Yes"){
    alert("You are eligible for driving");
}
    else{
        alert("Please have a valid ID")
    }
}
else if(age === "17"){
    alert("Eligible for learning")
}
else{
    alert("Under Age")
}
}

function forLoop(){
var num=4;
for (var i=5; i<=10; i++){
    if(i == 6){
        continue
    }
    console.log(num+ " x " +i+ " = " + (num*i));
}
}

function pyramid(){
var noofrows = 5;
for(var i =1; i<noofrows; i++){
    1,2
    for(var j=0; j<i;j++){
        console.log("*");1 
    }
    console.log("back n")
}
}

function arrayTest(){
var foods = ["Pizza", "Burger", "Snacks"]

console.log(foods); 

foods[1]= "Sandwich";

console.log(foods + foods[1]);

foods[3] = "Fries";

console.log(foods);
}


function dice(){
var num = Math.random();
console.log(num);

var num2 = (num*6);
console.log(num2);

var num3 = num2+1;
console.log(num3);

var dice = Math.floor(num3);
console.log(dice);
}


function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}



// All invokes
// greetings("Evening");


// var answer = multiple(2,2.5);
// var answer2 = multiple(2,2);
// var finalAnswer = multiple(answer,answer2);
// console.log(finalAnswer);

// var total = sum(2,2)
// console.log(total);

// var ans = sum(multiple(2,2),22);
// console.log(ans);


function greetings(string){
    alert("Good"+ " " +string);
}

function multiple(num1, num2){
    var num3 = num1 * num2;
    // alert(num3)
    return num3 
    alert(num3);
}

function sum(param1,param2){
    return param1 + param2;
    // return (param1,param2) +10;
}

// var param1 = 20;

// var addition = sum(2,2);
// console.log(addition)

var num = 5;
function changeValue(a){
    return a= 98;
}

const changeValue1 = () =>{
    
}
num = changeValue(num);
console.log(num);