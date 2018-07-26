const yargs = require('yargs');

const gecode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

gecode.getGeoCode(argv.a, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(`We're in ${result.address}.`);
        weather.getWeather(result.Lattitude,result.Longitude, (errorMessage, weatherResult) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(weatherResult);
            }
        });        
    }
});
