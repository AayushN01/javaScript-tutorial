<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Object properties</title>
</head>
<body>
  <script>
    
  var person = {firstName: 'John',
                lastName: 'Doe',
                age: 30,
                eyeColor: 'Blue'
    
  };
    
  //Add, change, delete
  
 //1 = objectName.property //person.firstName
 //2 = objectName['property']//person['firstName']
  //3 =objectName[expression]//var x = "age"; person[x]
  var x = "age";
  console.log(person.firstName);
  console.log(person['lastName']);
  console.log(person[x]);
  /*  
   for(variable in object){
     code to be executed
   }
    */
    var text = "";
    for(y in person){
      text += person[y];
      text += " ";
      }
    console.log(text);
    
    person.nationality = "English";
    console.log(person.nationality);
    delete person.age;
    console.log(person);
  </script>
</body>
</html>