<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Logical Operators</title>
</head>
<body>
  <script>
    
    var age = 20;
    var gender = "male";
    
     //Logical And-->true && true == true
    if(age < 18 && gender == "male"){
      console.log('Bro,Too Young');
      }else if(age < 18 && gender != "male"){
        console.log('Sis,Too young');
      }else if(age == 18 && gender == "male"){
        console.log('Happy Birthday Bro!!');
        
      }else if(age == 18 && gender != "male"){
        console.log('Happy Birthday sisi!!');
      }else if(age > 18 && gender == "male"){
        console.log("Bro! You`re grown up!!");
    }else{
      console.log("Sis! You`re grown up!");
    }
   
    
    //Logical Or---> false || true == true
    if(age < 18 || age > 65){
      console.log('Bro,Too Young');
     
      }else{
        console.log('Happy Birthday Bro!!');        
      }  
    
    //Ternary Operator
    //variableName = (condition) ? value1 : value2;
    
    var voteable = (age < 18) ? myfunction() : "Old enough to vote!";
    console.log("voteable="+voteable);
    
    function myfunction(){
      //do some complex logic here..
      return "the answer"
    }
    
    //Logical Not ---> !false==true and vice versa
  </script>
</body>
</html>