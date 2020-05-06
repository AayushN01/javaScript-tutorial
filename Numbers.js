<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Numbers</title>
</head>
<body>
  
  <script>
  var x1 = 999999999999999;
  var x2 = 9999999999999999; 
  console.log(x1, x2);
   var x3 = 0.2 + 0.1;
   console.log(x3);
    
   //BINARy-2
  
   //Hexadecimal-16
    
   //Octal-8
    
   //Decimal-10
   var x4 = 128;
   console.log('Hexadecimal value==' +x4.toString(16));
   console.log('Octal value ==' +x4.toString(8));
   console.log('BInary value ==' +x4.toString(2));
    
   var hexa = 0xFF;
   console.log('Decimal Value==' +hexa.toString(10));
   
   //INfinity
    var x5 = 2/0;
    console.log('Infinity test==' +x5);
    console.log(typeof Infinity);
    
    //NaN==Not a Number
    var x6 = 100/"HUndred";
    console.log(x6, isNaN(x6));
    
    var x7= 100/"100";
    console.log(x7,isNaN(x7));
    
    var x8 = NaN;
    var x9 = "5";
    var x10 = x8+x9;
    console.log(x10);
    
      
    
  </script>
  
</body>
</html>