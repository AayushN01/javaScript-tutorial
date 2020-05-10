<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Objects</title>
</head>
<body>
  <script>
    
    //objects in JS
    var x1 = new Boolean(); //Booleans
    var x2 = new Number();//Numbers
    var x3 = new String();//Strings
    var x4 = new date();//Dates
    //Math
    var x5 = new RegExp();//Regular expression
    var x6 = new Array();//Arrays
    var x7 = new Function();//Functions
    var x8 = new Object();//Objects  
    
    var personS = "John Doe";
    var person = {firstName: 'John',
                 lastName: 'Doe',
                 age: 30,
                 eyeColor:'blue',
                 fullName: function(){
                   return this.firstName + " " + this.lastName;
                 }
                 };
   
      //PHP-Associative Arrays
      //Python-Dictionaries
    //C - hash table
    //hash maps - Java
    //Hashes - Ruby and perl
    
    //5 primitives: 
    //-string
    //boolean
    //number
    //null
    //undefined
    
    //Ways to create Objects
    //1)Object Literal
    var personSmarter = {firstName: 'John',
                 lastName: 'Doe',
                 age: 30,
                 eyeColor:'blue',
                 };

    //2) new keyword
    var personSmarterThanSmarter = new Object();
    personSmarterThanSmarter.firstName = 'John';
    personSmarterThanSmarter.lastName = 'John';
    
    //3)Constructor
    function person(first, last, age, eye){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eye = eye;
    }
    var mother = new person("Jenny", "Doe", 70, "black");
    
    
  </script>
</body>
</html>