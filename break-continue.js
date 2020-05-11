<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Break-continue</title>
</head>
<body>
<script>
   //break
  for(i=0; i<10; i++){
    if(i==3){
      break;
    }
    console.log(i);
    
  }
  
  //continue
  for(i=0; i<10; i++){
    if(i==3){
      contrinue;
    }
    console.log(i);
    
  }
  
  //Labels
  
  //Name : {}
  text = "";
  var cars = ['BMW', 'Merc', 'Honda', 'Ford'];
  list: {
    text += cars[0];
    text += cars[1];
    text += cars[2];
    break list;
    text += cars[3];
    text += cars[4];
    text += cars[5];
    text += cars[6];
    text += cars[7];
    text += cars[8];
  }
  console.log(text);
  
  </script>
</body>
</html>