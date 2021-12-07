function getAverage (a,b){

    var average =(a+b) /2; //local variable; we can make it global by defining it outside the function: var average=0;
    console.log(average);
    return average;
}
var myResult = getAverage(7,11); //global variable

function logResult(){
    console.log("the average is " + myResult + "inside the function");
}
logResult();