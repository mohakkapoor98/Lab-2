const express = require("express");
const app = express();

const https = require("https");

// fetching an API call

app.get("/", (req, res) => {
  https.get("https://insult.mattbas.org/api/insult", (response) => {
    response.on("data", (insult) => {
      res.send(`
              <http>
                <head><title> Express App </title></head> 
              
                <body>
                    <h1 style="color:red"> Hi there </h1>
                    <h4 style="color:blue"> 
                    ${insult.toString()}! 
                    </h4>
                </body>
              </http>
            `);
    });
  });
});

app.listen(process.env.PORT || 3000);
