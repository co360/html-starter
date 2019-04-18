## How to read weather data from REST API

https://www.weather.gov/documentation/services-web-api

1) Get a data point (LINK) by given a coordinate with this API

    https://api.weather.gov/points/28.4779,-81.3014
    
   You can use the website to find the coordinate by Zipcode here
   https://forecast.weather.gov/

2) Now get the weather data:

    https://api.weather.gov/gridpoints/MLB/25,68/forecast
    
   You should get back something like `weather-forecast.json`
