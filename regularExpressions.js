<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Regular Experssion</title>
</head>
<body>
<script>
/*
  /pattern/modifier
*/
  var str = "Hello There";
  var n = str.search(/There/i);
  console.log(n);
  
  var x = str.replace('There', 'America');
  console.log(x);
  //Modifiers
  // i - case-insensitive
  // g - global match
  // m - multiline match
  
  //Patterns 
  //[abc] - Letter
  //[0-9] - Numbers
    //(x|y)-Either x or y
  
  //test()-reg exp method searches for A String in a pattern that returns true or false
  var pattern = /e/;
  console.log(/e/.test("The best thing in life are free!"));
  console.log(/best/.exec("The best thing in life are free!"));
  
  
  
  </script>
  
  
</body>
</html>