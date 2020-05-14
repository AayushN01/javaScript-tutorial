<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Hoisting</title>
</head>
<body>
  <h1>hoisting is javaScript default behaviour of moving declarations to the top</h1>
  <p id="example"></p>
  <p id="sum"></p>
<script>
  console.log("------hoisting-------");
  x = 5;//Assigned value to x-initialization;
  elem = document.getElementById("example");
  elem.innerHTML = x;
  
  var x;
  
  console.log("-----hoisting2------");
  var a = 5;
  var b = 10;
  elem = document.getElementById('sum');
  elem.innerHTML = a + b;
  
  var b;
  //ALWAYS DECLARE VARIABLES AT THE TOP
  </script>
</body>
</html>