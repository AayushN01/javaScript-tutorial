<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Number Methods</title>
</head>
<body>
<script>
  
  //toString()
  var x =123;
  console.log(x.toString(),(123).toString());
  
  //toExponential()
  //returns a string with number rounded and return using exp notation
   var y = 9.656;
  console.log("-----ToExponnentiol----");
  console.log(y.toExponential());
  console.log(y.toExponential(2));
  console.log(y.toExponential(4));
  
  //toFixed()
  //returns a string with a number written with specified number of decimals
  console.log("----tofixed---");
  console.log(y.toFixed(0));
  console.log(y.toFixed(2));
  
  //toPrecision()
  //returns a string with number with specified length
  console.log("----toPrecision---");
  console.log(y.toPrecision());
  console.log(y.toPrecision(2));
  
  //valueOf() returns a number as a number 
  console.log("----valueOF---");
  console.log(x.valueOf());
  console.log((123).valueOf());
  
  //Converting variables to Numbers
  //Number()--global JavaScript Method
  console.log("----NUMBER()-----")
  var result = true;
  console.log(Number(result));
  console.log(Number("10"));
  console.log(Number("10 20"));
  
  //parseInt()=converts parameter to integer
  console.log(parseInt(result));
  console.log(parseInt("10"));
  console.log(parseInt("10 20"));
  console.log(parseInt("years 10"));
  console.log(parseInt("10 years"));
  
  //parseFloat()
   console.log(parseFloat(result));
  console.log(parseFloat("10.33"));
  console.log(parseFloat("10 20"));
  console.log(parseFloat("years 10"));
  console.log(parseFloat("10 years"));
  
  //Number Properties
  console.log("max value of JS number = "+Number.MAX_VALUE);
  console.log("");
  
  console.log("min value of JS number = "+Number.MIN_VALUE);
  console.log("");
  
  console.log("NEgative Infinity value of JS number = "+Number.NEGATIVE_INFINITY);
  console.log("");
  
  </script>
</body>
</html>