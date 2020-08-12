<?php 
$dir = glob("*.*"); 
$js = scandir("js");
$fonts = scandir("fonts"); 
$img = scandir("img");
$styles = scandir("styles");
?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
         integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
         crossorigin="anonymous"
      />
      <meta charset="UTF-8" />
      <link href="./styles/fonts.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <title>quote counter</title>
      <link rel="stylesheet" href="./styles/styles.css" />
      <script src="./js/var.js"></script>
      <script src="./js/functions.js"></script>
      <script src="./main.js"></script>
      <script src="./js/item.js"></script>
      <script src="./js/html.js"></script>
      <link rel="manifest" href="./manifest.webmanifest" />
      <link rel="apple-touch-icon" href="./img/180.png" />
   </head>
   <body>
      <form id="nameInput">
         <input type="text" id="name" placeholder="name" />
         <button id="submit">
            <i class="fas fa-plus-square"></i>
         </button>
      </form>
      <br /><br /><br />
      <div class="totalDiv"> 
            <label class="form-switch" id="form-switch">
               <input type="checkbox" id="check" />
               <i></i>
               
            </label>
         <div class="totals" id="totals">
            <div class="quoted">
               <h1>quoted</h1>

               <h2 id="totalQuoted">£0</h2>
            </div>
            <div class="actual">
               <h1>actual</h1>
               <h2 id="totalActual">£0</h2>
            </div>
            <div class="difference">
               <h1>difference</h1>
               <h2 id="totalDifference">£0</h2>
            </div>
         </div>
      </div>
      <div class="items"></div>

      <script>
         getArr(<?php echo json_encode($dir)?>, null);
         getArr(<?php echo json_encode($fonts)?>, "fonts");
         getArr(<?php echo json_encode($img)?>, "img");
         getArr(<?php echo json_encode($js)?>, "js");
         getArr(<?php echo json_encode($styles)?>, "styles");
         init();
         
    window.addEventListener("load", () => {
      registerSW();
    });

    async function registerSW() {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("./sw.js");
        } catch (e) {
          console.log(`sw registration failed`);
        }
      }
    }
         
      </script>
   </body>
</html>
