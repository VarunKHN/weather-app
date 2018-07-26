const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject) =>{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDoG4y4bU8LViDysv2HFdlduPW0_v9ti6A`,
            json: true
        },(error,response,body) =>{
            if(error){
                reject('Unable to connect to google servers.');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Address invalid');
            }else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    Lattitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((suc)=>{
    console.log(JSON.stringify(suc, undefined, 2));
}).catch((err) =>{
    console.log(err);
});