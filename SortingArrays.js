<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sorting Arrays</title>
</head>
<body>
  <script>
   
   var fruits = ['Banana', 'Apple', 'Mango', 'Orange'];
   console.log('Sorted =' +fruits.sort());
   console.log('Reverse sorted = ' +fruits.reverse());
    
   var points = [41, 100, 1, 5, 25, 10, 15];
    console.log('Ascending =' +points.sort())//mildaina
    
   //so for numneric values do using function as
      points.sort(function(a,b){return a - b});
      console.log(points);
    console.log('lowest elemnt = ' +points[0]);
    console.log('highest element = ' +points[points.length-1]);
    //descending order
    points.sort(function(a,b){return b - a});
      console.log(points);
    
    //Randomize
    points.sort(function(a,b){return 0.5 - Math.random()});
      
    console.log(points);
    //Sorting based of numeric object parameters
    
    var cars = [{name: 'Volvo', year: 2020},
               {name: 'Merc', year:2015},
               {name: 'BMW', year: 2012}
               ];
    cars.sort(function(a,b){return a.year-b.year});
    console.log(cars)
    
    //sorting based on string object parameter
    cars.sort(function(a,b){
      var x = a.name.toLowerCase();
      var y =b.name.toLowerCase();
      if(x<y){
        return -1;
        }
      if(x>y){
        return -1;
      }
      console.log(cars);
    });
    
   
      
  </script>
</body>
</html>