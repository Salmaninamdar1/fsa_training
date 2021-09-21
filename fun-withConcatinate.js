// its a higher order function : it means that add a function and in that function we are passing argument 
// but in argument i am passing also a function thats way its called as higher order function 

function add(a, b) {
    var c = a + b;
    console.log(c);
}

function f1() {
    return 1000;
}
function f2() {
    return 2000;
}
add("value of argument", 10, 20);
add("value of function= ", f1, f2);
// by using higher order function we are passing function as a argument but whats happend here
// the result is came in the form of concatinate
// both argumented fuction are concatinated here if u want to avoid tha concatination u can refer function.js

