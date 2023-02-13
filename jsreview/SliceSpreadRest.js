const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
}

//Obviously hobbies is a reference, can be edited without violating constant rule
const hobbies = ['Sports', 'Cooking']

/*
for(let hobby of hobbies)
    console.log(hobby)
*/

// Map takes in function
hobbies.push('Programming')
console.log(hobbies.map(hobby => {return 'Hobby: ' + hobby }))

//Slicing and Spreading
const copiedArray = hobbies.slice();


//Spreading pulls out elements of array
const copiedArray2 = [...hobbies]
console.log(copiedArray2)

//Rest Operator, operator is context sensitive which is why it looks the same as spread
const toArray =  (... args) => {
    return args
}

console.log(toArray(1, 2, 3, 4))