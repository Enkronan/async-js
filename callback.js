console.log("start");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("now we have the data");
        callback({userEmail: email});
    }, 2000);
}

const user = loginUser('test@hotmail.com', 123456, (user) => {
    console.log(user);
});

console.log("finished");