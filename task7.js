var a = prompt("Enter your First number");
var b = prompt("enter your second number");
var c = prompt("Enter your operatrion");

var num1 = parseInt(a);
var num2 = parseInt(b);
if(c == "+"){
    var sum = num1+num2;
    document.write("your result is: ", sum);
}
if(c == "-"){
    var sub = num1-num2;
    document.write("your result is: ", sub);
}
if(c == "/"){
    var div = num1/num2;
    document.write("your result is: ", div);
}
if(c == "*"){
    var mul = num1*num2;
    document.write("your result is: ", mul);
}
if(c == "%"){
    var modulaor = num1%num2;
    document.write("your result is: ", modulaor);
}
