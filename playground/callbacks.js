var getUser = (id, callback) =>{
    var user = {
        id:id,
        name:"Varun"
    };
    setTimeout(() => {
        callback();
    });
};

getUser(31, (userObject) => {
    console.log(userObject);
});