const myPromise = require('./myPromise')

let result = []

myPromise('hello', 2000)
.then(msg => {
    result.push(msg)
    return myPromise('hello again', 3000)
})
.then(msg => {
    result.push(msg)
    return myPromise('hello again again', 1000)
})
.then(msg => result.push(msg))
.catch(err => console.log('err::', err))
.finally(() => console.log('finally::', result))