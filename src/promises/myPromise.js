function myPromise(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false; // Math.random() * 10 < 2;
            return (error || msg === 'give me an error') 
                ? reject(new Error("whoops...")) 
                : resolve(msg.toUpperCase())
        }, delay);
    })
}

module.exports = myPromise