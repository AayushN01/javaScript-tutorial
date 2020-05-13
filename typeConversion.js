<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Type Conversion</title>
</head>
<body>
<script>
//toString(), String()
  console.log("--------Number to String----------");
  var x = 10;
  console.log(String(x));
  console.log(String(123));
  console.log(String(x),x.toString());
  console.log(String(123), (123).toString());

//  
console.log("--------Boolean to String----------");  
  console.log(String(false));
  console.log(true.toString());
  
console.log("--------Date to String----------");  
  console.log(String(new Date("1/1/2020")));
  console.log(new Date("1/1/2020").toString());  
//String- Number
  console.log("--------String to Number----------");  
  console.log(Number("3.14"));
  console.log(Number(" "));
  console.log(Number(""));
  console.log(Number("10 20"));
  console.log(Number("1020"));
  
var y = "John";
var x = +y;
  console.log(x);
  
//
  console.log("--------Boolean to Number----------");  
  console.log(Number(false));
  console.log(Number(true));
  //
  console.log("--------Date to Number----------");  
  console.log(Number(new Date("1/1/2020")));
  
  //Automatic Type conversion
  console.log("------Automatic type conversion----");
  console.log(5+null);
  console.log("5"+null);
  console.log("5"+2);
  console.log("5"-2);
  console.log("5"*"2");
  
  </script>
  
  
</body>
</html>