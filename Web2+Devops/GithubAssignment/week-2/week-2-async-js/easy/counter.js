let counter = 0;
function increament() {
    console.log(counter);
    counter = counter + 1;
}

setInterval(increament, 1000);