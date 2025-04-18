//alert

//Greeting
alert("Hello, Welcome to this project")

//error message
alert("Error, Please enter a valid password")

//using line break
alert("Welcome to JS Land...\nHappy Coding!")

//a message with checkbox
alert("Happy Coding!\nPrevent this message from creating additional dialogs")

// confirm("Prevent this message from creating additional dialogs")
// prompt("Prevent this message from creating additional dialogs")

//message through console
let message1=("Hello... I can run JS through my web browser's console")
console.log(message1);

//variable string

//Declare a variable called username.
var username;

//Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Tanzeel Qamar";
console.log(myName);


//Declare a JS variable, titled message.
var message;

//Assign “Hello World” to variable message
message = "Hello World";
console.log(message);


//Display the message in alert box.
alert(message)

//save student’s bio data in JS variables and show the data in alert boxes.
var name = "John Doe";
var age = "15 years old";
var education = "Certified Mobile Application Development";

alert(name)
alert(age)
alert(education)

//display the alert using one JS variable
var a = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(a) 

//variable called email and assign to it a string
var email="abc@gmail.com"
console.log(email);

//Show message in an alert box.by using string concatenation
alert(`My email address is ${email}`)

//Declare a variable called book and display message
var book="A smarter way to learn JavaScript"
alert(`I am trying to learn from the Book ${book}`)

//display in browser
document.write("Yah! I can write HTML content through javascript");

//store string in var and show in alert
var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(design)

//variable numbers

//age declaration
var age = 23;
alert(`I am ${age} years old`)

//visit count
var visitCount =1;
alert(`you have visited this site ${visitCount} times`)
var visitCount1 =2;
alert(`you have visited this site ${visitCount1} times`)

//birth year
var birthYear = 2002
document.write(`My birth year is ${birthYear}\n\n`) 

//clothing store
var name="John"
var order=5
var storeName="'xyz clothing store'"
document.write(`${name} ordered ${order} T-shirts from ${storeName}`,string) 

//Assignment 2

//chapter 1
alert("Tanzeel")
alert("Qamar")
alert("abc@gmail.com")
alert(+92122334455)
alert("abc123")
alert("You're learning Javascript!")
alert("This is my assignment")

//chapter 2
var myName = "Tanzeel Qamar"
var myEducation 
myEducation = "Msc Chemistry"
console.log(myEducation);
var teamName = "Tanzeel, Fareeba"
alert(teamName)
var bestMan = "Charlie"
bestMan="John"
console.log(bestMan)

//chapter 3
var caseQty 
caseQty = 144
var num = "9"
var num1 = 6
var num2 = 10
var sum
sum = num1 + num2 
console.log(sum);
var merchTotal = 100
var shippingCharge = 10
var orderTotal = merchTotal + shippingCharge
console.log(orderTotal);
var number = 10
var number1 = number + 7
console.log(number1);



//Assignment 3

//chapter 4
var firstName = "tanzeel" , lastName = "qamar" , age = 23
//illegal
var alert = "message"
var class = "popup"
var var = "confirmation"
var string = "output"
var array = "list"
//legal
var name = "tanzeel"
var userInfo = "info"
var num1= 10
var $list = "list"
var _animal = "animal"
document.write ("Rules for naming JS variables"+"<h3/>")
document.write ("variable names can only contain $, _, letters, numbers")
document.write ("For example $my_1stVariable")
document.write ("Variables must begin with a $, _, letters")
document.write ("For example $name, _name or name")
document.write("Variable names are case sensitive")
document.write ("Variable names should not be JS keywords")


//chapter 5
var num1 =10
var num2 = 20
var result = num1+ num2 
document.write("the sum of 10 and 20 is " + result)

var num1 =10
var num2 = 20
var result = num1 - num2 
document.write("the difference of 10 and 20 is " + result)

var num1 =10
var num2 = 20
var result = num1 * num2 
document.write("the multiple of 10 and 20 is " + result)

var num1 =10
var num2 = 20
var result = num1 / num2 
document.write("the division of 10 and 20 is " + result)

var num1 =10
var num2 = 20
var result = num1 % num2 
document.write("the remainder of 10 and 20 is " + result)

var number1 
document.write("Value after variable declaration is:" + number1)
number1 = 5
document.write("initial vale :" + number1)
number1= ++number1
console.log(number1)
document.write("value after increment is:" + number1)
number1 = 7+number1
document.write("value after addition is:" + number1)
number1 = --number1
document.write("value after deccrement is:" + number1)
number1 = number1 % 3
document.write("value remainder is:" + number1)


var ticketPrice = 600
var price5 = ticketPrice*5
document.write ("Cost of buying 5 tickets is:" + price5)

var num = 7
document.write("Table of 7")
for (var i=1; i<=10; i++){
    document.write(num + "x" + i + "=" + num*i);
}

var celsius = 35
var convert = (celsius * 9/5)+32
var temp = `temperature in oF is ${convert}oF`
var convert1 =(convert - 32)*5/9
var temp3 = `temperature in oC is ${convert1}oC`
var temp2 = `temperature in oC is ${celsius}oC`
console.log(temp);
console.log(temp2);
console.log(convert1);
console.log(temp3);

var item1 = 200
var quantity1 = 4
var item2 = 550
var quantity2 = 3
var shippingCharges = 100
var totalCost = (item1*quantity1) + (item2 * quantity2) + shippingCharges
document.write(`Price of Item 1 is ${item1}\nQuantity Of item 1 is ${quantity1}\nPrice of item 2 is ${item2}\nquantity of item 2 is ${quantity2}\nTotal cost is ${totalCost}`)

var totalMarks = 1100
var obtainedMarks = 850
var percentage = (obtainedMarks/totalMarks)*100
document.write("Total marks" + totalMarks+ "Obtained Marks"+obtainedMarks+ "The percentage of student is" + percentage)

var usd = 10
var riyal = 25
var rupees = (usd*104.80)+(riyal*28)
document.write(`Total currency in PKR is ${rupees}`)

var  num = 6
var result = ((6+5)*10)/2
console.log(result);

var currentYear=2025
var birthYear = 2002
var age1=currentYear-birthYear
var age2 = currentYear+birthYear
document.write("“They are either" +age1+ "or" +age2+ "years old”.")

var title =" The Geometrizer"
var radius = 30
var circumference= 2*3.14*radius
var area = 3.14*radius*radius
document.write(title)
document.write(`The circumference of circle is ${circumference}`)
document.write(`The area of circle is ${area}`)

var snack = "jelly"
var currentAge = 23
var maxAge = 50
var snackPerDay = 2
var eatTotal = (maxAge-currentAge)*snackPerDay
document.write(`you will need ${eatTotal} jellies to lat you until the ripe old age of ${maxAge}`)

var a = 10
document.write(`the value of 'a' is ${a}`)
a = ++a
document.write(`Now the value of 'a' is ${a}`)
a = a++
document.write(`Now the value of 'a' is ${a}`)
a = --a
document.write(`Now the value of 'a' is ${a}`)
a = a--
document.write(`Now the value of 'a' is ${a}`)

var a = 2, b = 1;
var result = --a - --b + ++b + b--; //1 - 0 +2 +0
console.log(result); //ans 3
result = --a; // 1-1=0
console.log(result); //ans 0
result = --a - --b; //0-0 = 0
console.log(result); //ans 0
result = --a - --b + ++b; //-1 -1 +1 = -1
console.log(result); //ans -1
result = --a - --b + ++b + b--; //-2 -2 +2 - 1 = -3
console.log(result); //ans = -3
document.write(`The value of a is -2 and value of b is -1 and result is -3`)

var question = "What is your name?"
var popup = prompt(question,"Human")
var answer = "Tanzeel"
if (popup == answer){
    alert("Welcome to this website")
}
else{
    alert("You are a Robot!!!")
}

var ask = "Enter a number"
var popUp = prompt (ask)
var ans = 2
for(i=0, i<=10; i++;)
if(popUp=ans){
    console.log(ans + "x" + i + "=" + ans*i)
}
else{
    console.log(5 + "x" + i + "=" + 5*i)
}

var sub1 = "English"
var sub2 = "Urdu"
var sub3 = "Math"

var total_marks = 100

var obt_1 = 67
var obt_2 = 89
var obt_3 = 98

var total = total_marks*3

var total_obt = obt_1+obt_2+obt_3

var sub1Percentage = (obt_1/total_marks)*100
var sub2Percentage = (obt_2/total_marks)*100
var sub3Percentage = (obt_3/total_marks)*100

var total_percentage = (total_obt/total)*100

document.write(sub1, total_marks, obt_1, sub1Percentage)
document.write(sub2, total_marks, obt_2, sub2Percentage)
document.write(sub3, total_marks, obt_3, sub3Percentage)

document.write(total, total_obt, total_percentage)

//chapter 9-11

var q1 = "Enter Your City"
var q2 = prompt(q1, "City")
var q1_ans = "Karachi"
if(q2 == q1_ans){
    alert("Welcome To Karachi City")
}
else{
    alert("Error!!!")
}

var quest = "What is your gender?"
var quest1 = prompt(quest)
var female = "Female"
var male = "Male"
if(quest1==female){
    alert("Good Morning Maam")
}
else{
    alert("Welcome Sir")
}
 var signal = "Enter color of traffic signal"
 var _signal = prompt(signal)
 var color1 = "red"
 var color2 = "Yellow"
 var color3 = "green"
 if(_signal==color1){
    alert("Must stop")
 }
 else if(_signal==color2){
    alert("Ready to move")
 }
 else if (_signal==color3){
    alert("Move now")
 }

 var fuel = "How much fuel is left in the car?(In litres)"
 var fuel_ans = prompt(fuel) 
 if(fuel_ans < 0.25){
     alert("Refill the fuel")
 }
 else{
    alert("You have enough fuel")
 }


 var d = 4;
if (++d === 5){
alert("given condition for variable d is true"); //true
}
var e = 82;
if (e++ === 83){
alert("given condition for variable e is true");
}
var f = 12;
if (f++ === 13){
alert("condition 1 is true");
}
if (f === 13){
alert("condition 2 is true"); //true
}
if (++f < 14){
alert("condition 3 is true");
}
if(f === 14){
alert("condition 4 is true"); //true
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); //true
}
if (true){
alert("True"); //true
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat"); //printed
    }

var secretNumber = 6
var questions = prompt("Guess any number")
if(questions==secretNumber){
    alert("Bongo!Correct answer")
}
else if(questions== ++secretNumber){
    alert("Close one")
}
else{
    alert("Try again")
}

var divide = prompt("Enter a number and check whether it is divisible by 3 or not")
if(divide%3===0){
    alert("This number can be divisible by 3")
}
else{
    alert("This number cannot be divisible by 3")
}

var even = prompt("Enter a number and check whether it is even or odd")
if(even%2===0){
    alert("the number is even")
}
else{
    alert("the number is odd")
}

var temperature=prompt("Enter Temperature")
if(temperature>40){
    alert("Its too hot outside")
}
else if(temperature>30){
    alert("The weather today is normal")
}
else if(temperature>20){
    alert("Today's weather is cool")
}
else if(temperature>10){
    alert("OMG! today's weather is so cool")
}

var num_1 = 45
var num_2 = 102
var add = "+"
var sub ="-"
var multiply = "*"
var divide = "/"
var remainder = "%"
var input = prompt("Which operation do you want to perform? +, -, *, / or %")
if(input==add){
    alert(num_1+num_2)
}
else if(input==sub){
    alert(num_1-num_2)
}
else if(input==multiply){
    alert(num_1*num_2)
}
else if(input==divide){
    alert(num_1/num_2)
}
else if(input==remainder){
    alert(num_1%num_2)
}

//chapter 4

var productCost = 3.45;
var nameOfBand;
var _num = 5
var first_name = "tanzeel"
var last_name = "qamar"
var full_name =first_name+last_name
//legal
var myName
var _name
var $myName
var name123
//illegal
var var
var null
var 12name
var Name
var let 
var user-name

//chapter 5
 //answer => %(Modulus gives the remainder)
var num = 20 % 6; //value 2
var numA = 1000
var numB = 2000
var largeNumber = numA*numB
var anum = 350
var bnum = 270
var result = anum - bnum
var subtract = result
alert(largeNumber)

//chapter 6

var x = 7
x = ++x
var z = 100
z = --z

var x = 50;
var y = x++; //value of y = 50
console.log(y);
var y = 50;
var u = --y;
console.log(u); //value of u = 49
var oldNum = 20, oldNum= --oldNum, newNum=++oldNum
var oldNum = 30, oldNum= ++oldNum, newNum=--oldNum
alert(oldNum)

//chapter 7

var calculatedNum = 2 + (2 * 6); 
console.log(calculatedNum); // calculatedNum = 14

var calculatedNum = (2 + 2) * 6; 
console.log(calculatedNum);// calculatedNum = 24

var calculatedNum = (2 + 2) * (4 + 2); 
console.log(calculatedNum); // calculatedNum = 24

var calculatedNum = ((2 + 2) * 4) + 2; 
console.log(calculatedNum);// calculatedNum = 18

var costOfResult = (2 + 2) * (4 + 10)
console.log(costOfResult);
var unitsOfResult = 2 + (2 * 4) + 10
console.log(costOfResult);
var pressureOfResult = (4 / 2) * 4 + 6 // added 6 because it was not possible to get ans = 5 with 4/2*4 in any case.
console.log(pressureOfResult);

//chapter 8

var num = "2" + "2";
console.log(num); //output = 22
var message
message = ("Hello," + "Dolly"); // output is Hello Dolly
alert(message)
alert("33" + 3); //333 displayed

var countryName = "Pakistan"
var slogan = "Zindabad"
alert(countryName+slogan)

var num = 32
var letter = "string"
alert(num + letter)

var value1 = "Pakistan"
var value2 = "Karachi"
var final = `My country is ${value1} and my city is ${value2}`

//chapter 9
var question = "enter first name"
var first_name = prompt(question)
var country = "your country?"
var my_country  = prompt(country, "China")

var yourName = prompt("Enter Your Name");
var message = "Enter your name"
var _message = prompt(message, "tanzeel")

var fvrtSnack = "what is your favourite snack?"
var fvrtBiscuit = "biscuit"
var question = prompt(fvrtSnack, fvrtBiscuit)
var response =  "Favourite snack is biscuit"

var ask = prompt("Are you a student or a teacher?" , "student")
if (ask =="student")
{
    alert("you are a stusent")
}
else{
    alert("you are a teacher")
}

//chapter 10
var askCity = prompt("Enter your city")
var city = "Karachi"
if (askCity == city) { 
console.log("The City Of Lights")
}

var x = 10
var y = 10
var askValue = prompt("enter the value of x")
var z = 20
if(x === y){
    prompt("enter value of z")
}

var askZipCode = prompt("Enter Zip Code")
var zipCode = 10010
if(askZipCode===zipCode){
    alert("Karachi")
}
else{
    alert("Please write correct city!")
}

var x = 6
var $question = prompt("enter a value")
if($question===x){
    x=1
}
console.log(x);

if(zipcode !== 10010){
    alert("incorrect zip code")
}

if(x>=y){
    alert("X is greater or equal to y")
}

var x = "name"
var y = 5
if(x!==y){
    x=6
}
var a =4
var b = 7
if(a!==b){
    alert("Congratulations!")
}

var my_name = "Tanzeel"
var askName = prompt("Enter your name")
if(askName!==my_name){
    alert("No Match!")
}
