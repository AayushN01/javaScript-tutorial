<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Pass by value and Pass by Reference</title>
</head>
<body>
  <script>
  //Pass by value--
    function changeValue(item){
      console.log("item=" +item);
      item = 2;
      console.log("item="+item);
    }
   /* var x = 1;
    console.log(x);
    changeValue(x);
    console.log(x);*/
    
    //pass by refernce
    var x= {value: 1};
    changeValue(x);
    console.log(x.value);
    
  </script>
</body>
</html>