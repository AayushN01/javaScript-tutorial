<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Type Conversion</title>
</head>
<body>
<script>
  
  //constructor
  console.log("John-" +"John".constructor);
  
  function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array")>-1;
  }
  console.log(isArray(3.14));
  console.log(isArray([1,2,3,4]));
  </script>
  
</body>
</html>