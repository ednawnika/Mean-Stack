
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="bower_components/jquery/dist/jquery.js" charset="utf-8"></script>
  <title>Document</title>
  <script>
  $(document).ready(
    function(){
      $('button').click(function(){
        // as soon as the AJAX request returns, displayName is invoked and passed data!
        //https://api.jquery.com/jquery.get/
        $.get('https://api.github.com/users/ednawnika', displayName);
      });
    function displayName(data){
        if (data.name){
          $('body').append("<p>"+data.name+"</p>");
        }
      }
    }
  );
  </script>
</head>
<body>
<button>Click Me</button>
</body>
</html>
