<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Object Methods</title>
</head>
<body>
  <script>
  
    //methodName: function(){LOC}
      
    //objectName.methodName();
    
    var person= {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      eyeColor: 'blue',
      fullName: function(){
        return this.firstName + "  " + this.lastName;
      }
    }
    console.log(person.fullName());
    
     var x = "Johnny Johnny";
    console.log(x.toUpperCase());
    
  </script>
</body>
</html>