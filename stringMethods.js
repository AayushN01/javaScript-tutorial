<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>String Methods</title>
</head>
<body>
  <p>String methods helps to work with string</p>
  <script>
  var text = "Find me if you can, me can also be here";
  console.log(text.length);
   
  console.log('me word is at position ==' +text.indexOf('me'));
    console.log('me word is at position ==' +text.lastIndexOf('me'));
   console.log('me word is at position ==' +text.search('me'));
    //slice(start, end)
      var fruits = "Apple, Banana, Kiwi";
      console.log('slice in action==' + fruits.slice(7, 13));
      console.log('slice in action==' + fruits.slice(-12,-6));
    //substring(start,end)
      console.log('substring in action==' + fruits.substring(7, 13));
    //substr(start, length)
    console.log('substr in action==' + fruits.substr(7,6));
  
    //Replace contents of string
    //replace('initial', 'final')
    var fruitsUpgraded = fruits.replace('Kiwi','Orange');
    console.log('replace in action ==' + fruitsUpgraded);
  
      var you  = text.replace('me', 'you');
      console.log('replace in action=='+ you);
  
  //To LowerCase or to UpperCase
    console.log(text.toLowerCase());
    console.log(text.toUpperCase());
    
    var x = "Hello";
    var y = "World!";
    var z = x.concat(" ",y); 
    var z1 = x + " " + y;
    console.log(z, z1);
    
    //To methods to extrac String Characters
    
    console.log('test charAt=='+x.charAt(0));
    
    //Convert String into Array
    var fruitsArray =  fruits.split(',');
    console.log(fruitsArray);
    //Splitting based on space
    console.log(fruits.split(' '));
    console.log(fruits.split('a'));
    
  
  </script>
  
</body>
</html>