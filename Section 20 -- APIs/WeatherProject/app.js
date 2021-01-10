const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")


})

app.post("/",function(req,res){
  let cityName = req.body.cityInput
  // Creating our API call url using cityInput form input
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7a3ed116a2e36455e8366c1c3781d010&q=${cityName}&units=metric`

  https.get(url,function(response){
    // Callback function to handle weather api response
    response.on("data",function(data){
      let weatherData = JSON.parse(data);
      console.log(weatherData);

      // Used data stored as variables
      let temperature = weatherData.list[0].main.temp
      let feelsLikeTemperature = weatherData.list[0].main.feels_like
      let weatherDescription = weatherData.list[0].weather[0].description
      let iconID = weatherData.list[0].weather[0].icon
      let iconURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`

      res.write(`<p>The weather in ${cityName} is: ${temperature}`)
      res.write(`<p>Feels Like: ${feelsLikeTemperature}`)
      res.write(`<p>Description: ${weatherDescription}`)
      res.write(`<p><img src = ${iconURL}>`)

      res.send()



    })

  })


})

app.listen(3000,function(){

  console.log("Server running on port 3000")
})





  // https.get(url, function(response){
  //
  //   response.on("data", function(data){
  //
  //     let weatherData = JSON.parse(data);
  //     console.log(weatherData);
  //     let temperature = weatherData.list[0].main.temp
  //     console.log(temperature)
  //
  //     let weatherDescription = weatherData.list[0].weather[0].description;
  //     console.log(weatherDescription);
  //     res.write(`<h1> The temperature in Edmonton is ${temperature} </h1>`)
  //     res.write(`Description: ${weatherDescription} </br>`)
  //     let iconID = weatherData.list[0].weather[0].icon
  //     let iconURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`
  //     console.log(iconURL)
  //     res.write(`<img src = ${iconURL}>`)
  //     res.send()
  //   })
  // })

  // res.send("Server is up and running yo ")
