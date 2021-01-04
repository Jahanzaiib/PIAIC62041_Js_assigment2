var grades = [];
    var i;
        for (i = 0; i < 3; i++) {
            grades.push(Number(prompt("Enter your marks:" + (i + 1), "0-100")));

        }
        var sum = grades.reduce(function(a, b){
            return a + b;
        }, 0);
    var avg = sum/3;
       

    document.write("<br> Total Marks: " + 300 );
    document.write("<br> Obtain Marks: " + sum );
    document.write("<br> Percentage Marks: " + avg + "% ");
    if ( avg >= 80 ){
        var a = "A-One";

        document.write("<br> Grade:  " , a);
        document.write("<br> Remarks: Excellent");
    }
        else if ( avg >= 70 ){
        var b = "A";
        document.write("<br> Grade:  " , b);
        document.write("<br> Remarks: Good");
    }
        else if ( avg > 60 ){
        var c = "B";
        document.write("<br> Grade:  " , c);
        document.write("<br> Remarks: You need to imporve");
    }
        else {
        var d = "Fail"
        document.write("<br> Grade:  " , d);
        document.write("<br> Remarks: Sorry");
    }

    
    
    