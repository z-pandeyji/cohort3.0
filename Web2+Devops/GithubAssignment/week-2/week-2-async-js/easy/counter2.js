let counter = 0;
function increament() {
        console.log(counter)
        counter = counter + 1;
        setTimeout(increament, 1000);
}
setTimeout(increament, 1000);