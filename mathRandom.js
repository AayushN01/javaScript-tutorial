<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Math Random</title>
</head>
<body>
<script>
 let x = Math.random();
  console.log(x);
  //0-9
  console.log(Math.floor(x*10));
  //0-10
  console.log(Math.floor(x*11));
  //0-100
  console.log(Math.floor(x*100));
  //1-10
  console.log(Math.floor(x*10)+1);
  
  function generateRandom(min, max){
  return Math.floor(Math.random()*(max-min)) + min; 
    }
  
  function generateRandomBoth(min, max){
  return Math.floor(Math.random()*(max-min+1)) + min; 
    }
  </script>
</body>
</html>