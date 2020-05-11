<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Switch statements</title>
</head>
<body>
  <p id = "day"></p>
  <p id = "defaultDay"></p>
  <script>
    /*
    switch(expression){
    case n:
    code block;
    break;
    case n:
    code block;
    break;
    ....
    }
    */
    var day;
    switch(new Date().getDay()){
      case 0:
      day = "Sunday";
      break;
      case 1:
      day = "Monday";
      break;
        case 2:
      day = "Tuesday";
      break;
        case 3:
      day = "Wedday";
      break;
        case 4:
      day = "Thursday";
      break;
        case 5:
      day = "friday";
      break;
      case 6:
      day = "Saturday";
      break;
    }
    document.getElementById('day').innerHTML = day;
    
     var defaultDday;
    switch(new Date().getDay()){
      case 0:
      defaultDay = "Sunday";
      break;
      
      case 6:
      defaultDay = "Saturday";
      break;
      default:
        defaultDay="Looking for a weekend";
        
    }
    document.getElementById('defaultDay').innerHTML = defaultDay;
  </script>
</body>
</html>