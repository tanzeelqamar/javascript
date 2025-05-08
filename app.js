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


//assignment 21

//chapter 12-13

var input =prompt("Enter a character. it can be a string or a number")
if(input >=65 && input <=90){
    alert("It is an uppercase letter")
}
else if(input>=97 && input <=122){
    alert("It is a lowercase letter")
}else if(input==="A"){
   alert("The number is 65")
}
else if(input==="Z"){
   alert("The number is 90")
}else if(input==="a"){
   alert("The number is 97")
}else if(input==="z"){
   alert("The number is 122")
}
else{
   alert("please enter number between 65-122 or (A, a, Z or z")
}

var ask_1 = parseInt(prompt("Enter the character"))
var ask_2 = parseInt(prompt("Enter another character"))
if(ask_1 === ask_2){
    alert("The numbers are equal")
}else if(ask_1 > ask_2){
    alert(`${ask_1}`)
}
else if (ask_2 > ask_1){
    alert(`${ask_2}`)
}

var checkNumbers = parseInt(prompt("Enter any number"))
if(checkNumbers > 0){
    alert("The number is positive")
}else if (checkNumbers < 0){
    alert("The number is negative")
}else if (checkNumbers === 0){
    alert ("The number is zero")
}

var letter = prompt("Enter a letter")
if(letter && letter.length === 1 && letter==="a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u"){
    alert("True")
} else{
    alert("false")
}

var correctPassword = "abcd123"
var question = prompt("Enter your password")
if(question===correctPassword){
    alert("Correct!")
}else if(question!==correctPassword){
    alert("Incorrect password!")
}
else{
    alert("Enter your password!")
}

var greeting;
var hour = 13;
if(hour<18){
    greeting = "Good Day"
}else{
    greeting = "Good Evening"
}

var time = parseInt(prompt("What time is it?"))
if(time >= 0o0 && time <=1200){
    alert("Good Morning")
}else if (time>=1200 && time <=1700){
    alert("Good Afternoon")
}else if (time>=1700 && time <=2100){
    alert("Good Evening")
}else if (time>=2100 && time <=2359){
    alert("Good Night")
}else{
    alert("Please enter correct time")
}

var student_name = [""]
var student1 = new Array("")
var subjects = ["english", "urdu", "maths","islamiat", "computer", "science"]
var counting = [1, 2, 3, 4, 5, 6, 7]
var trfl = [true,false]
var mixed = ["name", 50, true]

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "Mphil", "Phd"]
for(var i=0; i<qualifications.length; i++){
console.log(education[i]);}



var studentName = ["Michael", "John", "Tony"]
var studentScore = [320, 230, 480]
var totalMarks = 500
var percentage;
studentName.splice(1,1,)
studentName.splice(1,1,)
studentScore.splice(1,1,)
studentScore.splice(1,1,)
var result = `score of ${studentName} is ${studentScore} with ${percentage=(studentScore*100)/totalMarks}%`
console.log(result);
studentName.splice(0,1,"John")
studentScore.splice(0,1,230)
var result = `score of ${studentName} is ${studentScore} with ${percentage=(studentScore*100)/totalMarks}%`
console.log(result);
studentName.splice(0,1,"Tony")
studentScore.splice(0,1,480)
var result = `score of ${studentName} is ${studentScore} with ${percentage=(studentScore*100)/totalMarks}%`
console.log(result);


var colorNames = ["black", "red", "purple", "pink", "brown", "blue", "white"]
var q = prompt("What color do you want to aadd in the begining?")
if(q===colorNames[0]){
    colorNames.splice(0,0,"black")
   //  console.log(colorNames);
    colorNames.splice(0,1)
    console.log(colorNames);
}else if(q===colorNames[1]){
   colorNames.splice(0,1,"red")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(1,1)
   // console.log(colorNames);
}
else if(q===colorNames[2]){
   colorNames.splice(0,1,"purple")
   // console.log(colorNames);
   colorNames.splice(2,0,"red")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(3,2)
   console.log(colorNames);
}
else if(q===colorNames[3]){
   colorNames.splice(0,1,"pink")
   // console.log(colorNames);
   // colorNames.splice(2,0,"red")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(4,1)
   // console.log(colorNames);
   colorNames.splice(3,0)
   console.log(colorNames);
}
else if(q===colorNames[4]){
   colorNames.splice(0,1,"brown")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(5,1)
   // console.log(colorNames);
   colorNames.splice(3,0)
   console.log(colorNames);
}
else if(q===colorNames[5]){
   colorNames.splice(0,1,"blue")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(6,1)
   // console.log(colorNames);
   colorNames.splice(3,0)
   console.log(colorNames);
}
else if(q===colorNames[6]){
   colorNames.splice(0,1,"white")
   // console.log(colorNames);
   colorNames.splice(1,0,"black")
   // console.log(colorNames);
   colorNames.splice(7,1)
   // console.log(colorNames);
   colorNames.splice(3,0)
   console.log(colorNames);
}
colorNames.unshift("yellow", "green")
console.log(colorNames);

colorNames.shift()
console.log(colorNames);

colorNames.push()
console.log(colorNames);


var colorNames = ["black", "red", "purple", "pink", "brown"]
var q = +prompt("At which index do you want to add the color?")
var q2 = prompt("enter color name")
if((q==0)||(q2 == "red")){ 
   colorNames.splice(0,0,"red")
   colorNames.splice(2,1)
   console.log(colorNames);
}else if ((q==1)||(q2 == "pink")){ 
   colorNames.splice(1,0,"pink")
   console.log(colorNames);
   colorNames.splice(4,1)
   console.log(colorNames);
}
else if ((q==4)||(q2 == "black")){ 
   colorNames.splice(4,0,"black")
   console.log(colorNames);
   colorNames.splice(0,1)
   console.log(colorNames);
}else if ((q==5)||(q2 == "purple")){ 
   colorNames.splice(5,0,"purple")
   console.log(colorNames);
   colorNames.splice(2,1)
   console.log(colorNames);
}else if ((q==2)||(q2 == "brown")){ 
   colorNames.splice(2,0,"brown")
   console.log(colorNames);
   colorNames.splice(5,1)
   console.log(colorNames);
}else if((q==4)||(q2=="black")){
   colorNames.splice(4,0,"black")
   console.log(colorNames);
   colorNames.shift()
   console.log(colorNames);
}

q3 = prompt("Which color do you want to delete?enter index")
q4 = prompt("how many color do you want to delete?")
if((q3==2) && (q4==2)){
   colorNames.splice(1,2)
   console.log(colorNames)
}else if((q3==1)&&(q4==2)){
   colorNames.splice(0,2)
   console.log(colorNames);
}
else if((q3==4)&&(q4==0)){
   colorNames.splice(3,0)
   console.log(colorNames);
}else if((q3==3)&&(q4==1)){
   colorNames.splice(2,1)
   console.log(colorNames);
}

var scores = [320, 230, 480, 120]
scores.sort((a,b)=>a-b)
console.log(scores);

var citiesList = ["Karachi", "Lahore", "Islamabad", "Multan", "Quetta"]
citiesList.splice(0,3)
console.log(citiesList);

var arr = ["This", "is", "my", "cat"]
var str = arr.join(" ")
console.log(str);

var devices =["keyboard", "mouse", "printer", "monitor"]
var first = devices.shift()
console.log(first);
var last = devices.pop()
console.log(last);

var mobile = ["Apple", "samsung", "nokia", "Motorola", "sony", "haier"]
document.write("<select>")
for (var i=0; i < mobile.length; i++)
   document.write(`<option> ${mobile[i]}</option>`)
document.write("</select>")


//assignment 21(ii)

var a = 23
var b = 67
if(a===b){
    alert("Both values are equal")
}else if(a!==b){
    alert("both values are not equal")
}



var userName = prompt("enter user name")
var userclass = +prompt("enter user class")
var mathMarks = +prompt("enter your math marks")
var englishMarks = +prompt("enter your english marks")
var computerMarks = +prompt("enter your computer marks")
var urduMarks = +prompt("enter your urdu marks")
var totalMarks=400
var percentage;
var grade;
var obtainedMarks;
if(mathMarks<=50 || englishMarks<=50 || computerMarks<=50 || urduMarks<=50){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="F"
}else if((mathMarks>=51 || englishMarks>=51 || computerMarks>=51 || urduMarks>=51)||(mathMarks<=60 || englishMarks<=60 || computerMarks<=60 || urduMarks<=60)){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="D"
}
else if((mathMarks>=61 || englishMarks>=61 || computerMarks>=61 || urduMarks>=61)||(mathMarks<=70 || englishMarks<=70 || computerMarks<=70 || urduMarks<=70)){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="C"
}
else if((mathMarks>=71 || englishMarks>=71 || computerMarks>=71 || urduMarks>=71)||(mathMarks<=80 || englishMarks<=80 || computerMarks<=80 || urduMarks<=80)){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="B"
}
else if((mathMarks>=81 || englishMarks>=81 || computerMarks>=81 || urduMarks>=81)||(mathMarks<=90 || englishMarks<=90 || computerMarks<=90 || urduMarks<=90)){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="A"
}
else if((mathMarks>=91 || englishMarks>=91 || computerMarks>=91 || urduMarks>=91)||(mathMarks<=100 || englishMarks<=100 || computerMarks<=100 || urduMarks<=100)){
   obtainedMarks=mathMarks+englishMarks+computerMarks+urduMarks
   percentage=(obtainedMarks*100)/totalMarks
   grade="A+"
}
var marksheet= `
----------------------------
Name:${userName}
Class: ${userclass}
----------------------------
Subject | Marks
Math | ${mathMarks}
English | ${englishMarks}
Computer | ${computerMarks}
Urdu | ${urduMarks}
----------------------------
total Marks: ${totalMarks}
obtained: ${obtainedMarks}
Percentage:${percentage}
Grade: ${grade}
`
console.log(marksheet)

if(a===10){
    alert("a is equal to 10")
}else{
    alert(`The correct value of a is${a}`)
}

var q1 = prompt("Enter city")
if(q1 === "Karachi"){
    alert("Acknowledging it's karachi")
}else if(q1==="lahore"){
    alert("Acknowledging it's lahore")
}else{
    alert("Acknowledging it is your city")
}

if(a===b && c===d){
    alert("true")
}

if(a===b || c!==d){
    alert("true")
}

if(name==="hamza" || name==="arsalan" && age<70){
alert("true")
}

var g = 34
var z = 12
if(g>z || g<z){
    alert("g is greater than z")
}

var $firstName = "tanzeel"
var $lastName  = "qamar"
var q5 = prompt("Enter your first name")
var q6 = prompt("Enter your last name")
if(q5===$firstName && q6===$lastName){
    alert(`your full name is ${$firstName} ${$lastName}`)
}


if(password!==5){
    alert("password must be greater than 5")
    if(password===5){
        alert("ok")
    }
}

if(a===1){
    if (c==="Max"){
        alert("ok")
    }
}

if (a===1){
    alert("ok")
}else if(c==="Max"){
    alert("ok")
}

var num1 = 45
var num2 = 45
if(num1===num2){
    alert("ok")
    if(num1<=num2){
        alert("incorrect")
    }
}

var arr = []
var arr1 = ["city"]

var letters = ["h", "i", "j", "k", "l", "m", "n", "o"]
console.log(letters[2]);
console.log(letters.length);

var list = ["karachi"]
list.splice(1,0, "lahore")
console.log(list);
alert(list[1])

var score = [79]
score.push(65)
console.log(score);
alert(score[1])

var alphabet=["h","i","j","k"]
alphabet.pop()
console.log(alphabet);
alphabet.push(54)
console.log(alphabet);

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
console.log(sizes);
sizes.unshift(23,56,34)
console.log(sizes);

var classes = ["II"]
classes.unshift("I")
alert(classes[0])

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2,0,"L")
console.log(sizes);

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(0,3)
console.log(sizes);
var regSizes = ["S", "M", "XL"]
console.log(regSizes);

var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1,3,"cow", "sheep")
console.log(pets);

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
pets.slice(0, 3)
console.log(pets);
pets.slice(2,0)
console.log(pets);


//assignment 22

var arr = [[]]

var arr1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
for(var i=0; i<arr1.length; i++){
    for(var i=0; i<arr1[i].length; i++){
        console.log(arr1[i][j]);
    }
}

for(var i=1; i <=10; i++){
    console.log(i);    
}


var num = prompt("enter a number")
   for(var i=1; i<=10; i++){
      console.log(num +"x"+ i + "=" + num*i);
   }


   var fruits = ["apple", "mango", "banana", "orange", "melon"]
   console.log(fruits);
   console.log(`element at index ${fruits.indexOf("apple")} is apple`);
   console.log(`element at index ${fruits.indexOf("mango")} is mango`);
   console.log(`element at index ${fruits.indexOf("banana")} is banana`);
   console.log(`element at index ${fruits.indexOf("orange")} is orange`);
   console.log(`element at index ${fruits.indexOf("melon")} is melon`);

document.write("<h1>Counting</h1>")
for(var i=1; i<=15; i++){
    console.log(i);
    document.write(`${[i]},`)
}

document.write("<h1>ReverseCounting</h1>")
for(var i=15; i>=1; i--){
    console.log(i);
    document.write(`${[i]},`)
}

document.write("<h1>Even Numbers:</h1>")
for(var i=0; i<=20; i+=2){
    console.log(i);
    document.write(`${[i]},`)
}

document.write("<h1>Odd Numbers:</h1>")
for(var i=1; i<=20; i+=2){
    console.log(i);
    document.write(`${[i]},`)
}

document.write("<h1>Series:</h1>")
for(var i=2; i<=20; i+=2){
    console.log(i);
    document.write(`${[i]}k,`)
}

var q9 = prompt("What do you want to order?")
var lst = ["cake", "apple pie", "cookie", "chips", "patties"]
for(var i=0; i<lst.length; i++){
   if(q9===lst[i]){
      alert("available at index"+i)
   }else if(q9!==lst[i]){
      alert("sorry not available")
   }
}

var num =[24, 53, 78, 91, 12]
var max = Math.max(...num)
console.log(`the largest number is ${max}`);

var min = Math.min(...num)
console.log(`The smallest number is ${min}`);

for(var i=5; i<=100; i+=5)
    console.log(i);

//assignment 22(ii)

for(var i=1; i<=10; i++)
    console.log(i);

for (var i=1; i<=12; i++)
    console.log(i);


for (var i=0; i<=4; i++)
    console.log(i);
    
for(var j=1; j<101; j++)
    console.log(j);

for(var i=3; i>0; i--)
    console.log(i);

var number = [1,2,3,4,5,6]

var flag = true;

var pets = ["cat", "dog", "cow", "sheep", "camel"]
for(var i=1; i<pets.length; i++)
   console.log(pets[i]);
console.log(pets.length);

for(var i=1; i<=10; i++){
    console.log(i);
 if(i===1){
    alert(`counter is ${i}`)
 }}

 var names=["tanzeel", "fareeba", "dua", "malika"]
var firstName =prompt("Enter your name")
var found;
for(var i=0; i<names.length; i++){
 if(firstName===names[i]){
   var found =true
   break
 }
}
if(found){
   alert("Enter")
}else{
   alert("enter correct name")
}

var list=["pencil", "scale", "sharpner", "eraser"]
var userInput = prompt("Enter Stationary")
var matchFound;
for (var i=0; i<list.length; i++){
   if (userInput===list[i]){
      alert("Match Found")
      matchFound=true;
      break;
   }
}
if(matchFound){
   alert("Match FOund")
}
else{
   alert("Not Found")
}

var firstArr =["a", "b", "c", "d", "e", "f"]
var secondArr = [1,2,3,4,5,6]
var combine =[]
for(var i=0; i<firstArr.length; i++){
   for(var j=0; j<secondArr.length; j++){
 combine.push(firstArr[i]+secondArr[j])
   
   }
}
console.log(combine);



//assignment 23

var qn = prompt("Enter your first name")
var qn2 = prompt("Enter your last name")
alert (`Hello! ${qn} ${qn2}`)

var ask = prompt("Enter your favourite mobile phone model")
document.write(`Your favourite Mobile phone model is ${ask} Length of string: ${ask.length}`)

var letter = 'Pakistani'
var n = letter.indexOf("n")
var chr = letter.charAt(3)
console.log(`String: ${letter}`);
console.log(`Index of 'n' is:${n}`);
console.log(`Character at 3rd index is: ${chr}`);


var str = "Hello World"
var length = str.lastIndexOf("l")
console.log(`String: ${str}`);
console.log(`Last index of 'l' is: ${length}`);

var city = "Hyderabad"
console.log(city);
var rpl = city.replace("Hyder", "Islam")
console.log(rpl);

var message = "Ali and Sami are best friends, they play football and cricket"
console.log(message);
var rpl2 = message.replace(/and/g, "&")
console.log(rpl2);


var strng = "472"
var num = parseFloat(strng)
document.write(`Value: ${strng} Type: string\n Value: ${num} Type: Number`)

var input = prompt("Enter your favourite DryFruit")
var cse = input.toUpperCase()
alert(cse);

var input1 = prompt("Enter anything in lowercase")
var cse = input1.charAt(0).toUpperCase()+input1.slice(1)
alert(cse);

var num = 35.36
var str=num.toString().replace(".","")
console.log(num);
console.log(str);

var q = prompt("Enter your name")
var found= false
for(var i=0; i<q.length; i++){
var response = q.charCodeAt(i)
if((response>=33 && response<=64)){
   found= true
   break;
}
}
if(found){
   alert("Enter valid name")
}
else{
   alert("welcome")
}



var q9 = prompt("What do you want to order?")
var lst = ["cake", "apple pie", "cookie", "chips", "patties"]
var lst1 = q9.toLowerCase()
var found = false
for(var i=0; i<lst.length; i++){
   if(lst1===lst[i]){
    found = true
    break;
   }
}
   if(found) {
      alert("available at index"+i)
   }  
   else{
      alert("sorry not available")
   }

   var password = prompt("Enter Password")
var num = password.charAt(0)
var asc = num.charCodeAt(0)
var found = false
if(password.length= 6 || (asc>=48 && asc<=57)){
   found= true
}
if(found){
   alert("enter valid password")
}
else{
   alert("welcome")
}


var university = "University of Karachi";
var arr = university.split(" ")
console.log(arr);
document.write(arr)

var input = prompt("enter country name")
var last = input.charAt(input.length - 1)
document.write(`User Input: ${input}`)
document.write(`Last Character is: ${last}`)

var str = "The quick brown fox jumps over the lazy dog"
var word = "the"
var count = str.toLowerCase().split(`${word.toLowerCase()}`).length-1
console.log(`word count for ${word} is ${count}`);

var num = prompt("Enter a decimal value")
alert(`The value is ${num}\n Roundoff value is ${Math.round(num)}\n The floor value is ${Math.floor(num)}\n The ceil value is ${Math.ceil(num)}`)

var neg = prompt("Enter a negative decimal value")
if(neg<0){
   alert(`The number is ${neg}\n The roundoff value is ${Math.round(neg)}\n The floor value is ${Math.floor(neg)}\n The ceil value is ${Math.ceil(neg)}`)
}else{
   alert("Please enter a negative value")
}

var num = prompt("Enter a negative or positive value")
alert(`The absolute value of ${num} is ${Math.abs(num)}`)

var random = Math.floor(Math.random()*6)+1
alert(`The random dice value is ${random}`)

var toss = Math.floor(Math.random() *2)+1
console.log(toss);
var ask = parseInt(prompt("For toss, type 2 for  Head or 1 for Tail"))
if (ask === toss){
   alert("Fired!")
}else if(ask!== toss){
   alert("You Won!")
}

var random = Math.floor(Math.random()*100)+1
document.write(`The random between 1-100 is ${random}`)

var askWeight = parseInt(prompt("Enter your weight in Kilograms"))
var weight=askWeight.toFixed(1)
document.write(`Your weight is ${weight} Kilograms`)

var secret = Math.floor(Math.random()*10)+1
var ask = parseFloat(prompt("Enter a number between 1-10"))
if(ask === secret){
   alert("Congratulations!!")
}else if(ask!==secret){
   alert("Try Again!")
}

//assignment 23(ii)

var userInput= prompt("enter your name")
var allLower = userInput.toLowerCase();

var x = "Tanzeel"
x = x.toLowerCase()

var y = "qamar"
y = y.toUpperCase()

var name = "Tanzeel Qamar"
var fullName = name.toLowerCase();

var arr = ["buildings", "houses", "schools", "hospitals", "mosques"]
var lowerArr = arr.toLowerCase()

var str = "karachi"
var upper = str.toUpperCase()
alert(upper)

var cityName = "kaRacHi";
var capital = cityName.charAt(0).toUpperCase()+cityName.slice(1).toLowerCase()
console.log(capital);


var sameWords = "captain"
var slce = sameWords.slice(1,3)
console.log(slce);

var a = "This is the City of Lights"
var b = a.length
console.log(b);

var animal = "elephant"
var seg = animal.slice(2,6)
console.log(seg);

var w = "an apple a day keeps the doctor away"
var char = w.length
console.log(char);
var ind = w.indexOf("w")
console.log(ind);
 var second = w.slice(3,33)
 console.log(second);
 
 var text = "To be or not to be."; 
var indx = text.indexOf("be");
console.log(indx); //3

var text = "To be or not to be."; 
var indx = text.lastIndexOf("be");
console.log(indx); //16

var text = "go"
var indx = text.lastIndexOf("g")
console.log(indx);


var str = "snacks"
if (indexNum>=0 && indexNum<str.length){

}

var str = "abcde"
var indx = str.charAt(2)
console.log(indx);

var t = "MyNameisTanzeel"
var cha = t.charAt(10)
console.log(cha);

var str = "assignment"
var len = str.length
console.log(len); //20
var x = str.charAt(9)
console.log(x);


var input = "please enter your response"
var cha = input.charAt(5)
console.log(cha);

var str = "drink water"
var cha = "n"
if(cha===str.charAt(3)){

}

var y = "This is Question 15"
for(var i=0; i<y.length; i++){
   console.log(i);
   
}
var arr = y.split("")
console.log(arr);

var reply = "no"
console.log(reply);
var revisedReply = reply.replace("no", "yes")
console.log(revisedReply);

var str = "1"
console.log(str);
var newStr = str.replace("1", "one")
console.log(newStr);


var y = x.replace(/a/g, "z");

var num = 25.76
var round = Math.round(num)
console.log(round);

var origNum = 45.578
var roundNum = Math.ceil(origNum)
console.log(roundNum);

var origNum = 45.578
var roundNum = Math.floor(origNum)
console.log(roundNum);

var num1 = 67.349
var result = Math.round(num1)
console.log(result);

var num = 0.5
var round = Math.floor(num)
console.log(round);


var a = Math.floor(Math.random()*50)+1
console.log(a);

var gen_num = Math.random()
console.log(gen_num);

var num = Math.random()*6
console.log(num);

var toss = Math.floor(Math.random() *2)+1
console.log(toss);
var ask = parseInt(prompt("For toss, type 2 for  Head or 1 for Tail"))
if (ask === toss){
   alert("Fired!")
}else if(ask!== toss){
   alert("You Won!")
}

var num = parseInt(prompt("enter a number"))

var str ="123"
var num = parseInt(str)
console.log(num);

var q = "34.67"
var float = parseFloat(q)
console.log(float);

var num = Number("231")
console.log(num);

var n = 785
var s = n.toString()
console.log(s);

var number = 42
var str = number.toString()
console.log(str);

var str = "3.14"
var num = parseInt(str)
console.log(num);

var num = 356.0976354
var round = num.toFixed(4)
console.log(round);
var newNum = round.toString()
console.log(newNum);

var num = 45.98754
var newNum = num.toFixed(2) +","+ num.toString() + "," + parseInt(num)
console.log(newNum);

if(number==num.toFixed(2) && number==num.toString() && number.charAt(5)===num.toString().charAt(5)){

}

var  num = 98.56789
alert(num.toFixed(2)+","+num.toString())