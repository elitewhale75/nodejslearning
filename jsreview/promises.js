const  fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1000)
    })
    return promise
}

// Takes function
setTimeout(() => {
    console.log('Timer is done!')

    //Function being used in fetchdata here is passed to callback
    fetchData().then(() => {
        console.log('Promise resolved');
        return fetchData()
    }).then(() => {
        console.log('Promise is chained');
    })
}, 2000)