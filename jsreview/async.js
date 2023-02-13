const  fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!')
    }, 3000)
}

// Takes function
setTimeout(() => {
    console.log('Timer is done!')

    //Function being used in fetchdata here is passed to callback
    fetchData((text) => {
        console.log(text)
    })
}, 2000)

console.log('Not Async')

//Nested async calls, we go deeper and deeper from a callback