const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
}

// Pull out field from object can also destructure arrays
const printName = ({ name }) => {console.log(name)}

printName(person)