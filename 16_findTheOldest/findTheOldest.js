const findTheOldest = function(people) {

    let peopleAge = people.map(person => {
        let age = 0;
        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            const currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        }

        return { ...person, age: age };
    });

    let oldest = peopleAge.reduce((prev, current) => {
        return (prev.age > current.age) ? prev : current;
    });

    delete oldest.age;

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
