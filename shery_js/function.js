//"use strict"

//function is a block of code which we name anything and can run anytime.

// es5 and es6 
// es stands for ecmascript: ecmascript is a group of people how manage the javascript is called ecmascript.. 
//and 5 and 6 are versions..

// there is six types of js functions are present

// 1.function statement
// ex. function name_of_function(){

// }

// 2.function expression
// ex var a = function(){
//     //this is a expression..
// }

// 3.function Anonymous
// ex function(){
//     // function not having name..
// }

// 4.fat arrow function
// ex var a =()=>{
//     //statements..
// }

// 5.fat arrow with single parameter
// ex var a =(val)=>{
//     //statements
// } 
// "or"
// var a= val=>{ //val without fat or () or paranthesis only applicable for single value..
//     //statement
// }


// 6. fat arrow with implicit return
// ex var a=()=>whatever we write here it will directly retun to the function calling..

function stat(){
    console.log("this is a function statement");
}

var expres= function(){
    console.log("this is a function expression");
}

// function(){
//     console.log("this is a function anonymous");
// }

var fatt_arrow= ()=>{
    console.log("this is a fat arrow function");
}
var fatt_arrow_para= (val)=>{ // we can give single parameter without parentheses and it is not possible with to or more
    console.log("this is a fat arrow function with single parameter");
}
var fatt_arrow_retu=()=>4;

stat();
expres();
fatt_arrow();
fatt_arrow_para();
console.log(fatt_arrow_retu());
