function otherFunct(){
    console.log('we are in another funct');
    console.log('do some stuff');
}

console.log("start");

setTimeout(() => {
    console.log("Hi");
}, 2000);


otherFunct();

console.log("end");