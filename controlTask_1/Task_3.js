function groupPeople(people) {
    return people.reduce((grPeople, person) => {
      
        if (!grPeople[person.age]) {
            grPeople[person.age] = [];
        }

        grPeople[person.age].push(person.name);
        return grPeople;
    }, {}); 
}

const people = [
    { name: "Liza", age: 10 },
    { name: "Andrey", age: 20 },
    { name: "Olga", age: 30 },
    { name: "Alex", age: 40 },
    { name: "Dima", age: 50 }
];

console.log(groupPeople(people));
