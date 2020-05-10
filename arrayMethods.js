<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Array Methods</title>
</head>
<body>
  <script>
   
    var fruits = ['banana', 'orange', 'Apple', 'mango'];
    console.log(fruits);
    
    console.log('toString=' +fruits.toString());
    console.log('join=' +fruits.join('   '));
    
    //Push and pop
    fruits.push('Kiwi');
    console.log('push = '+fruits);
    
    fruits.pop();
    console.log('POP= '+fruits);
    
    //Shift and Unshift
    //Shift ==pop removes first element
    fruits.shift();
    console.log('Shift='+fruits);
    //Unshift- add element to first place
    fruits.unshift('Banana');
    console.log('Unshift='+fruits);
    //Change elemnts
    fruits[0] = 'Kiwi';
    console.log('Change='+fruits);
    fruits[fruits.length]='Banana';
    console.log('At end ='+fruits);
    //delete
    delete fruits[0];
    console.log('delete='+fruits);
    
    //splice
    fruits = ['Banana', 'Orange','Apple','Mango'];
    fruits.splice(2, 0, 'Lemon', 'Kiwi');
    console.log('Splic='+fruits);
    
    fruits.splice(0,1);
     console.log('Splice remove='+fruits);
    
    //Join
    var array1 = ['Tom', 'John'];
    var array2 = ['Smith', 'Jessi'];
    var array3 = ['Bob','Oggy'];
    var myArray = array1.concat(array2,array3);
    console.log(myArray);
    console.log('');
    
    //slice
    fruits = ['Banana', 'Orange','Apple','Mango'];
    console.log('slice='+fruits.slice(1));
    
    fruits1 = ['Banana', 'Orange','Apple','Mango'];
    console.log('slice='+fruits1.slice(1,3));
    
    
  </script>
</body>
</html>