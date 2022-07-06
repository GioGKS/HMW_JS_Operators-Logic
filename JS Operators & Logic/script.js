
/* ____________________________________________EXAMPLE 1____________________________________________ */

var a = true;
var b = false;

// Function
function chekIf(str, str1){
    if(str && str1){
        console.log("Answer is: True!")
        return true;
    }
    else{
        console.log("Answer is: False!")
        return false;
    }
}
console.log("____________________________________________EXAMPLE 1____________________________________________");
// 1: return false
chekIf(a, b);

//2: return true
chekIf(a, a);

//3: return false
chekIf(b, a);

//4: return false
chekIf(b, b);


/* ____________________________________________EXAMPLE 2____________________________________________ */

var defaultHouse = 6;
var matchSticks;

function makeHouse(number1){
    if(number1 < 0){
        console.log("Wrong Number!! Enter Number More Than 0.")
    }
    else if(number1 == 0){
        matchSticks = 0;
        console.log("Currently House Don'T Have Sticks.")
    }
    else if(number1 == 1){
        matchSticks = 6;
        console.log("Currently House Have: " + matchSticks)
    }
    else if(number1 > 1){
        matchSticks = ((number1 - 1) * 5) + defaultHouse;
        console.log("Currently House Have: " + matchSticks)
    }
};
console.log("____________________________________________EXAMPLE 2____________________________________________");
makeHouse(87);


/* ____________________________________________EXAMPLE 3____________________________________________ */

var s = 4;
var c = 6.28;

function perimeterOf(str, num){   
    if(str == "s"){
        console.log("Square Perimeter Is: " + num * s)
        return num * s;
    }
    else if(str == "c"){
        console.log("Circle Radius Is: " + num * c)
        return num * c;
    }
    else{
       return null;
    }
};
console.log("____________________________________________EXAMPLE 3____________________________________________");
perimeterOf('c', 10);


/* ____________________________________________LOOPS____________________________________________ */
console.log("____________________________________________LOOPS________________________________________________");
//Example 1:
function dollarLoop(num){
    for (i = 0; i <= num; i++) {
        console.log('$'.repeat(i))
    }
}
dollarLoop(10);

//Example 2:
function pyramidOf(numb) {
    for (i = 0; i < numb; i++) {
      var deadSpace = numb-i-1;
      console.log(" ".repeat(deadSpace).concat("*".repeat(i).concat("*").concat("*".repeat(i))))
    }
  }
   
pyramidOf(10);
   
//Example 3:

function fizBuz(num){
    for (i = 1; i <= num; i++) {
        if(i % 3 == 0){
            console.log('Fizz');
        }
        else if(i % 5 == 0){
            console.log('Buzz');
        }
        else if(i % 15 == 0){
            FizzBuzz
        }
        else{
            console.log(i);
        }
    }
};

fizBuz(16);
