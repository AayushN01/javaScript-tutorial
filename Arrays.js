<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Arrays</title>
</head>
<body>
  <script>
    var cars = ['Merc','BMW', 'Fiat'];
    console.log(cars);
    console.log(cars[1]);
    cars.push('Volvo');
    console.log(cars, typeof cars);
    console.log(cars[3]);
    console.log(cars[4]);
    
    var cars2 = new Array('Nissan', 'Suzuki', 'RediGo');
    console.log(cars2);
    
    var person = {firstName: 'John', lastname: 'Doe'};
    console.log(person.firstName);
    
    var mixedArray = [];
    mixedArray[0] = new Date('12/31/2020');
    mixedArray[1] = function myFunctio(){
      
    };
    mixedArray[3] = cars;
    
    console.log(cars.length);
    console.log(cars.sort()); //sorting in Ascending Order

    for(i=0; i<cars.length; i++){
      console.log(cars[i]);
    }
  
    //JS supports only indexed Array
    var namedArray = [];
    namedArray['firstName'] = "John";
    console.log(namedArray);
    
    var iAmAVar = 'Hey There';
    console.log(Array.isArray(iAmAVar));
    console.log(Array.isArray(cars));
    console.log(cars instanceof Array);
    
  </script>
</body>
</html>