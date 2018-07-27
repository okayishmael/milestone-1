// Student: Ishmael Sunday | https://github.com/okayishmael
// Foundamental of Software Development | https://codepartners.net
//Licsence: MIT 

let instruction = alert("Hello and welcome. We need to collect some information (Name, Current City, Gender and confirm if you are a coder) from you before you can access the site.\n\n Click Ok when you're ready.")
let name = prompt("What\'s your name?"); //declare var use prompt to display value in browser and collect user input
//if your enters a name...
if (name != null){
 // greet user with the name he/she entered .. insructing user to proceed to next step   
alert("Hi "+ name +"! Please click the \"OK button\" to enter your current city.")}; // using alert function. no input
// get user's current city
let origin = prompt(" Enter your current City:"); // prompt, input require
//get user's gender
let gender = prompt("Please enter your Gender:");// prompt, input require
//ask user to confirm if they code or not.
let coder = prompt('Finally, are you a coder?'); // declare var confirm to collect user input

console.log(instruction); //printing, place function name in the paranthesis 
console.log(name); // printing, place function name in the paranthesis 
console.log(origin); // printing, place function name in the paranthesis 
console.log(gender); // printing, place function name in the paranthesis 
console.log(coder); // printing, place function name in the paranthesis 

//Displaying user input into html

if(name){
    document.getElementById('username').innerHTML = name;
} 
// Origin/Current City
if(origin){
    document.getElementById('usercity').innerHTML = origin;
} 
//user Gender
if(gender){
    document.getElementById('usergender').innerHTML = gender;
} 
//Is user a coder. True or false wil be displyed
if(coder){
    document.getElementById('userclass').innerHTML = coder;
};


