<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>For Loop</title>
</head>
<body>
<script>
  
  /*for(statement1; statement2; stament3){
  block of code;
  }
  */
  var i;
  
  for(i=0; i<=10; i++){ 
  console.log(i);
  }
  var cars = ['BMW', 'Merc', 'Ford','Honda'];
  for(i=0, len=cars.length; i<len; i++){
    console.log(cars[i]);
  }
  
  var person = {fname:"John", lname:"Doe", age:25. mname:"Smith"};
  for x in person{
    console.log(x+" = "+person[x]);
  }
  </script>
</body>
</html>