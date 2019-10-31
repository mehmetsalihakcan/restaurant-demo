const express      = require("express"),
      app          = express(),
      bodyParser   = require("body-parser"),
      port         =  3005,
      yaml         = require("js-yaml"),
      fs           = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      var doc = yaml.safeLoad(fs.readFileSync("./menu.yaml", "utf8"));
      const jsonObject = JSON.stringify(doc, null, 2); //obje oldu
      const data = JSON.parse(jsonObject); //parse işlemi

      const mainMenu = []
      for(index in data["menus"]) {

        if (data["menus"][index].key == "main") {

          for(itemIndex in data["menus"][index].items) {
            const {name, caption, image, items,orderTag} = data["menus"][index].items[itemIndex]
            var obj = {
              "name" : name,
              "caption" : caption,
              "orderTag" : orderTag,
              "image" : image,
              "items": items
            }
            mainMenu.push(obj)
          }
        }
      }
      res.send(mainMenu);
    } catch (e) {
      console.log(e);
    }
  
});

//server
app.listen(port, err => {
   if (err) {
     console.log(err);
   } else {
     console.log("App is runing on port : ", port);
   }
});
