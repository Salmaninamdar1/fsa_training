// syntax
// Array.isarray is a function 
// 
// Array.isArray(){}

/* Q1  [2,3,5][3,4,7]==> 24 if u want to add this array and want total no of its how can we do */
function add(a, b) {

    if (typeof a == 'function') a = a();/////////here why we used single code
    if (typeof b == 'function') b = b();

    if (Array.isArray(a)) {
        var i = 0;
        var sum = 0;
        while (i < a.length) {
            sum += a[i]; // sum = sum+a[i];
            i++;

        }
        a = sum;//==> here we are assigning the value of sum in to a becoz of we don't want to loos our logic that var c= a+b;

    }
    if (Array.isArray(b)) {
        var sum = 0;
        for(var i=0; i<b.length; i++){

            sum += b[i]; // sum = sum+a[i];
        
        }
        b = sum;
    }
    var c = a + b;
    console.log(c);
    return c;

}




add([2, 3, 5][3, 4, 7]);
