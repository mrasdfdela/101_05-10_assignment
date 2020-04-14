let findTheOldest = function(people) {
    return people.reduce( (c,p)=>{
        if ( currentAge(p) > currentAge(c) ) {
            return p;
        } else {
            return c;
        }
    }, 
    {
        name: 'defaultDate',
        yearOfBirth: new Date().getFullYear()
    })
}

const currentAge = function(p) {
    p.yearOfDeath == undefined ? death = new Date().getFullYear() : death = p.yearOfDeath
    return death - p.yearOfBirth
}

module.exports = findTheOldest

// remember that JS object properties can always be referenced; they are undefined/null if not previously defined 