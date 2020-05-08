<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Dates</title>
</head>
<body>
  <p id="dateField"></p>
  <p id="dateField1"></p>
  <p id="dateField2"></p>
  <p id="dateField3"></p>
  <p id="dateField4"></p>   

<script>
 document.getElementById('dateField').innerHTML = new Date();
 document.getElementById('dateField1').innerHTML = new Date(1481346000000);
document.getElementById('dateField2').innerHTML = new Date('12/05/2020');
 document.getElementById('dateField3').innerHTML = new Date('2020/04/12');
  var d = new Date();
document.getElementById('dateField4').innerHTML = d.toString();
  document.getElementById('dateField4').innerHTML = d.toUTCString();
  document.getElementById('dateField4').innerHTML = d.toDateString();
  </script>
</body>
</html>