// Ususally do not have to make promise 
// Promises let you attach callbacks instead of passing them to functions



/************************************************************/

function doSomething(text)
{

    console.log(text)
    const promise = new Promise((resolve, reject) => 
    {
        resolve('resolved')
    })
    return promise
}

doSomething('Hi').then( (value) => 
{
    setTimeout( () => 
    {
        console.log(value)
    }, 1000)
}, 1000)

doSomething("What's up").then().then()