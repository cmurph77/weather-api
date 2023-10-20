const { getWeatherForecastDaily } = require('./weather_api_call.js');
const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;

console.log("Starting Server!")




const sample_data = {
  "city": "Dublin",
  "long": 1000,
  "lat": 1000,
  "day_one" : {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_two" :{
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_three": {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_four":{
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_five": {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  }
}


// app.get('/helloworld', (req, res) => {
//   res.send("Hello World");
//   console.log(JSON.stringify(req, null,3));
//   console.log("responce sent!")
// });

async function getdata(city) {
  try {
    const result = await getWeatherForecastDaily(city);
    // console.log(JSON.stringify(result, null, 4));
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;  // Rethrow the error to be caught by the caller
  }
}

app.get('/weather/:input', async (req, res) => {
  const input = req.params.input;
  console.log("\nReceived weather forecast request for City:");
  console.log(input);

  try {
    const result = await getdata(input);  // Await the asynchronous function
    //console.log(JSON.stringify(result, null, 4));
    res.json(result);  // Use res.json to send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
