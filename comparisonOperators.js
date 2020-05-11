<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Comparison Operators</title>
</head>
<body>
  <script>
    var x = 5;
    //greater than(>)
    console.log(x > 8);
    console.log(x > 4);
    
    //less than
    console.log(x < 8);
    console.log(x < 4);
    
    //greater than or equal to
    console.log(x >= 8);
    console.log(x >= 4);
    console.log(x >= 5);
    
    //less than or equal to
      console.log(x <= 8);
    console.log(x <= 4);
    console.log(x <= 5);
    
    //equal to
    console.log(x == 5);
    console.log(x == 4);
    console.log("x == 'five' is"+(x == "five"));
    
    //equal to value and type(===)
    console.log(x === 5);
    console.log(x === 8);
    console.log("x === 'five' is"+(x === "five"));
    
    
    //not equal to
    console.log(x != 5);
    console.log(x != 4);
    
    //not equal value or not equal type
            console.log(x !== 5);
    console.log(x !== 8);
    console.log("x !== 'five' is"+(x !== "five"));
    
  </script>
</body>
</html>