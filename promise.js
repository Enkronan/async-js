console.log("start")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("user not logged in"));
    }, 2000);
});

promise.then(result => {
    console.log(result);
}).catch(err => console.log(err));

console.log("finished");