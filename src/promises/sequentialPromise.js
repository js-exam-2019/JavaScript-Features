const myPromise = require('./myPromise')

const p1 = myPromise('hello', 5000)
const p2 = myPromise('hello again', 4000)
const p3 = myPromise('hello again again', 1000)
const p4 = myPromise('dont give me an error', 1000)

let promises = [ p1, p2, p3, p4 ]

Promise.all(promises)
.then(res => console.log(res))
.catch(err => console.log('err', err))
.finally(() => console.log('finally::'))