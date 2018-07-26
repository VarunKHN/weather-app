const request = require('request');

var getWeather = (lat,lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e1c668f9d4457b551804582a7374d380/${lat},${lng}`,
        json: true
    },(error,response,body) =>{
        if(!error && response.statusCode === 200){
            callback(undefined, `Current temperature is ${body.currently.temperature}, but it sure feels like ${body.currently.apparentTemperature}`);
        }else{
            callback('Unable to connect to Forecast Servers.');
        }
    });
}

module.exports = {
    getWeather
};