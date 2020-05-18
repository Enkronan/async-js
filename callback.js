console.log("start");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("now we have the data");
        callback({userEmail: email});
    }, 2000);
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 1000);
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback ("this is the title");
    }, 2500);
}


const user = loginUser('test@hotmail.com', 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (userVideos) => {
        console.log(userVideos);
        videoDetails(userVideos[0], (title) => {
            console.log(title);
        });
    });
});

console.log("finished");