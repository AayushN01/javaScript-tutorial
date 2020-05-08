<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Dates Methods</title>
</head>
<body>  
<script>
 
  var d= new Date();
  console.log(d.toString());
  
  //Get methods
  console.log("Date="+d.getDate());
  console.log("Day="+d.getDay());
  console.log("Year="+d.getFullYear());
  console.log("Hour="+d.getHours());
  console.log("Time="+d.getTime());
  
  //Set Methods
  d.setDate(31)
  console.log("Date="+d.getDate());
  d.setYear(2034)
  console.log("Year="+d.getFullYear());
  d.setTime(148072992395)
 console.log("Hour="+d.getHours());
  //console.log("Time="+d.setTime());
  
  //PArsing
  var msec = Date.parse('Dec 31, 2016');
  console.log(msec);
  console.log("Time- "+d.toString());
  //Compare Dates
  var today = new Date();
  someday = new Date();
  someday.setFullYear(2020, 0, 10);
  
  if(someday>today){
    console.log("Today is befor January the 1 2020");
  }else{
    console.log("Today is after January 10 2020");
  }
  
  </script>
</body>
</html>