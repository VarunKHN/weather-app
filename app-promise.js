const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a:{
            alias:'address',
            describe:'Address to fetch weather',
            string: true,
            default:'huccha'
        }
    })
    .help()
    .alias('help','h')
    .argv;

var formattedAddress = encodeURIComponent(argv.address);
var geCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyDoG4y4bU8LViDysv2HFdlduPW0_v9ti6A`;

axios.get(geCodeUrl).then((response) =>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Could not find the address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/e1c668f9d4457b551804582a7374d380/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) =>{
    var temp = response.data.currently.temperature;
    var apaTemp = response.data.currently.apparentTemperature;
    console.log(`Current temperature is ${temp}, but it sure feels like ${apaTemp}`);
}).catch((e) =>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    }else{
        console.log(e.message);
    }
});
