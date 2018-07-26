var asynchFunc = (a, b) =>{
    return new Promise((resolve, reject) =>{
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else{
            reject('Arguments must be numbers');
        }
    });
};

asynchFunc('sda',7).then((successMessage)=>{
    console.log(successMessage);
    return asynchFunc(successMessage, 33);
}).then((res)=>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});

// var somePromise = new Promise((resolve, reject) =>{
//     //resolve('Hey it worked');
//     reject('No haaaap');
// });

// somePromise.then((message) =>{
//     console.log(message);
// },(errorMessage) =>{
//     console.log(errorMessage);
// });