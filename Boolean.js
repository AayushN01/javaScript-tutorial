<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Booleans</title>
</head>
<body>
  <script>
   
    
    console.log("----------------Real Values----------");
    console.log(5 < 6);
    console.log(5 == 1);
    
    //All real values will return true
    console.log(Boolean(100));
    console.log(Boolean(3.14));
    console.log(Boolean(-5));
    console.log(Boolean(2+3+5+9));
    console.log(Boolean("Hello"));
    console.log(Boolean("false"));
    
    //All non-Real values will return false
        console.log("----------------Non-Real Values----------");
        var x = 0;
    console.log(Boolean(x));
    
     var x = -0;
    console.log(Boolean(x));
    
    var y;
    console.log(Boolean(y));
    console.log(Boolean(null));
    var z = 10 * "H";
    console.log(Boolean(z));
  </script>
</body>
</html>