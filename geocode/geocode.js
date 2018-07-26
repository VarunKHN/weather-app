const request = require('request');

var getGeoCode = (address, callback) => {
    var formattedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyDoG4y4bU8LViDysv2HFdlduPW0_v9ti6A`,
        json: true
    },(error,response,body) =>{
        if(error){
            callback('Unable to connect to google servers.');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Address invalid');
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                Lattitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    getGeoCode
};