<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Dates</title>
</head>
<body>
  
<script>
 //YYYY-MM-DD ISO Dates
  var d = new Date("2016-03-25");
  console.log(d.toString());
  
  var d = new Date("2016-03");
  console.log(d.toString());
  
  var d = new Date("2016");
  console.log(d.toString());
 
  var d = new Date("2016-03-25T12:13:44");
  console.log(d.toString());
  
  //Short Date MM/DD/YYYY
  
  var d = new Date("03/25/2016");
  console.log(d.toString());
  
  var d = new Date("25/03/2016");
  console.log(d.toString());
  
  //Long Dates 
   var d = new Date("Mar 25 2016");
  console.log(d.toString());  
  
  //Full DAte
  var d = new Date("Fri Mar 25 2016 00:00:00 GMT+0545 (Nepal Time)");
  console.log(d.toString());  
  
  
  </script>
</body>
</html>