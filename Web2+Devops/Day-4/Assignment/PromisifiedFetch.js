// Try to create a promisified version of 
// fetch

function delayFetch(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(resolve).catch(reject);
    });
}
delayFetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
console.log('Fetch End');
