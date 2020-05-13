<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Debugging</title>
</head>
<body>
  <p id = "example"></p>
  <script>
  //debugging
    var x = 15;
    var y = 5;
    var z = x * y;
    debugger;
    console.log('---------  - ---------')
   document.getElementById("example").innerHTML = z;
  </script>
  
  
</body>
</html>