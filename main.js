<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="style.css" rel="stylesheet" type="text/css" />

        <title>Title</title>
    </head>
    <body>
        <!-- HTML -->


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <!-- <script src="script.js"></script> -->
        <script type="module">
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
kaboom()
              loadSprite("bean", "/image/froggy.jpeg")

              addLevel ([
                "                          $",
                "                          $",
                "           $$         =   $",
                "  %      ====         =   $",
                "                      =    ",
                "       ^^      = >    =   &",
                "===========================",
            ]
            tileWidth: 32,
            tileHeight: 32,

            tiles: {
                "=": () => [
                   sprite("floor"),
                   area(),
                   solid(),
               ],
               "$": () => [
                   sprite("coin.jpeg"),
                   area(),
                   pos(0, -9),
               ],
               "^": () => [
                   sprite("spike"),
                   area(),
                   "danger",
               ],
           }
       })
       </script>
       <script>
           // JS


       </script>
   </body>
</html>