<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Object Prototype</title>
</head>
<body>
  <script>
  
    //object.protoType
    //new Date() - Date.prototype
    
    function Person(first, last, age, eyeColor){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyeColor;
      this.nationality = "English";
      this.name = function(){
      return this.firstName = + " " + " " this.lastName;
    }
      
    }
    var myFather = new Person("John", "Doe", 60, "black");
   var myMother = new Person("Johana", "Doe", 50, "blue");
    myFather.nationality = "English";
    myFather.name = function(){
      return this.firstName = + " " + " " this.lastName;
    }
    Person.prototype.nationality = "English";
    
    console.log("-----"myMother.nationality)
  </script>
</body>
</html>