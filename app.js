const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){

  var cityName = req.body.nameOfCity;
  const apiKey = "";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/find?q=" + cityName + "&units=" + unit + "&appid=" + apiKey;

  https.get(url, function(response){

    response.on("data", function (data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.list[0].main.temp
      const weatherDesc = weatherData.list[0].weather[0].description
      const icon = weatherData.list[0].weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<h1>The temperature in " + cityName + " is " + temp + " degrees Celsius. </h1>");
      res.write("<h1>The weather description for " + cityName + " is " + weatherDesc + " . </h1>");
      res.write("<img src=" + imageURL +  ">")
      res.send();

      console.log(icon);

    })
  })
});

app.listen(3000, function(req, res){
  console.log("On Port Number 3000.")
});
