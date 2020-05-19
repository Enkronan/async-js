console.log("start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("now we have the data");
            resolve({ userEmail: email });
        }, 2000);
    })

}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 1000);
    })

}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("this is the title");
        }, 2500);
    })
}


//loginUser("Robin", "1234")
//.then(user => getUserVideos(user.userEmail))
//.then(videos => videoDetails(videos[0]))
//.then(detail => console.log(detail));


async function displayUser(){
    const loggedUser = await loginUser("Robin", 1234);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(getUserVideos[0]);
    console.log(detail);
}

displayUser();

//console.log("finished");