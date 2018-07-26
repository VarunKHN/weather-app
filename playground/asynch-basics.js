console.log('Starting app');

setTimeout(() =>{
    console.log('Call back');
},2000);

setTimeout(()=>{
    console.log('One more call back');
})

console.log('Finishing up');