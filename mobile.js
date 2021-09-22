function Mobile(color){
    this.height=10;
    this.width=50;
    this.colors=color;
    
    this.call = function () {
        console.log(this.height+ " "+this.width+" "+this.colors);
     };
}

var iPhone7 =new Mobile("Red");
var iPhoneNew=iPhone7;
iPhoneNew.colors="blue";
iPhone7.call();
console.log(iPhoneNew===iPhone7);

var a=10;
var b=a;
console.log(a===b);