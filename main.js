<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="style.css" rel="stylesheet" type="text/css" />
        <style>
            /* CSS */

        </style>

        <title>Title</title>
    </head>
    <body>
        <!-- HTML -->


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <!-- <script src="script.js"></script> -->
        <script type="module">


            import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";


             kaboom();
              loadSprite("bean", "image/froggy.jpeg")



            setGravity(2400)

// const player = add([
//     // List of components, each offers a set of functionalities
//     sprite("mark"),
//     pos(100, 200),
//     area(),
//     body(),
//     health(8),
//     // Plain strings are tags, a quicker way to let us define behaviors for a group
//     "player",
//     "friendly",
//     // Components are just plain objects, you can pass an object literal as a component.
//     {
//         dir: LEFT,
//         dead: false,
//         speed: 240,
//     },
// ])

// player.move(player.dir.scale(player.speed))
// })
  //  onKeyPress("space", () => {
    //    player.jump()
// })


const JUMP_FORCE = 1320
const WALK_SPEED = 10


addLevel ([
    "                          $",
    "                          $",
    "           $$         =   $",
    "  %      ====         =   $",
    "                      =    ",
    "       ^^      = >    =   &",
    "===========================",
], {
    // "                          $",
    // "                 $        $",
    // "           $$    $    =   $",
    // "  %      ====    $    =   $",
    // "    $            $    =    ",
    // "   ^ ^^^^      = >    =   &",
    // "===========================",
    // define the size of tile block
//     tileWidth: 32,
//     tileHeight: 32,
//     // // define what each symbol means, by a function returning a component list (what will be passed to add())
//      tiles: {
//          "=": () => [
//             sprite("floor"),
//             area(),
//             solid(),
//         ],
//         "$": () => [
//             sprite("coin.jpeg"),
//             area(),
//             pos(0, -9),
//         ],
//         "^": () => [
//             sprite("spike"),
//             area(),
//             "danger",
//         ],
//     }
// })

// 	// generate a random point on screen
// // 	// width() and height() gives the game dimension
 	// const x = rand(0, width())
 	// const y = rand(0, height())




    </body>
</html>