// // for making program dynamicaly we should have to rap all the statment in  a function
// // advantage of the function is write ones calls as many time you want its reusabllity

// function Getgrade() {
//     var marks = 450;
//     var total = 600;
//     var parsentage = (marks / total * 100);
//     if (parsentage >= 70) console.log("Distinction");
//     else if (parcentage >= 60 && parcentage < 70) console.log("First class");
//     else if (parcentage >= 50 && parcentage < 60) console.log("second class");
//     else if (parcentage > 40 && parcentage < 50) connsole.log("third class");
//     else if (parcentage > 30 && parcentage < 35) console.log("bondery")
//         ;
//     else console.log("Failed");
// }
// Getgrade();
// // THIS IS A dynemacally program but all time give same o/p "distinction"
// // we have to make more dynimical what can we do?
// // ans ==> we have to remove the hardcoded value and put that value into parameter by creating new function lets have some eg

function add(a, b) {
    if (typeof a == "function") {
        a = a()
    }
    if (typeof b == "function") {
        b = b()
    }
    var c = a + b;
    return c;
}
// console.log(add(10, 20))
// // this fuction will not work until we called it
// add(10,20);
// add(20,20);
// add(30,20);
// add(10,50);
// add(50,20);

// due to loosly type of language we can pass the function as parameter\argument

// here we can 
function f1() {
    return 200;
}
function f2() {
    return 1000;
}
res = add(f1, f2);
console.log("here we are adding two functions= ",res)
