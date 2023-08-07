
function createWidget() {
    
    const Widget = Object.create({
        create(id) {
            const style = `

            .logFrame${ id } {
                display: block;
                width: 100%;
                height: 100px;
                border: none;
                overflow-y: hidden;
                overflow-x: hidden;
                background-color: #0d1116 ;
                border-radius: 5px;
                color: #fff;
            }
  
        `
            snippet = document.currentScript.innerHTML

            const wdg = document.createElement("div");
            wdg.innerHTML = `
         
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${ style }</style>
            <title>Hello World Widget</title>
        </head>
        <div class=\"widgetContainer${id}\">   
        <iframe sandbox=\'allow-scripts\' id=\'sandboxed-${ id }\' class=\'logFrame${ id }\' title=\'Console Frame\'></iframe>
         </div>   
        `;
            wdg.script = document.createElement("script")
            wdg.script.setAttribute('type', 'text/javascript');
            wdg.appendChild(wdg.script)
            return wdg;
        }
    });

    const id = `js${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`;
    const myWidgetInstance = Widget.create(id);
    document.write(`<div id= ${id} ></div>`);
    document.getElementById(id).appendChild(myWidgetInstance);
    console.log("createWidget")
    let ifr = document.getElementById(`sandboxed-${id}`)
    ifr.srcdoc = `

      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Widget</title>
  <style>
    /* Add your widget styles here */
    .hello-widget {
        color: #fff;
    }

  </style>
</head>
<body>
  <div class="hello-widget">
    <div id=\'log-${ id }\'></div>
  </div>
  <script>
  (function() {
    var logger = document.getElementById(\'log-${ id }\');
    let fetchRes = fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data[0]);
      logger.innerHTML += 'Quote of the day :' + \'<h1>'\  + data[0].text  + \'</h1>\';
    });
  })();

        
     </script>
</body>
</html>

    `
};

createWidget()
