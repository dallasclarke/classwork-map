let users = [
    {
    firstName: 'Joe',
    lastName:'Orin',
    car: 'Porsche',
    dog:'Shitzu',
    },
    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },
    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },
    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
    ];

let result = users.map(name => `${name.firstName} ${name.lastName}`);
console.log(result);

const users2 = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey'}
];

let result2 = users2.map((person) => {
    const userAge = person['name'].length * 10;
        return {[person.name]: person.likes, age: userAge};
},)
console.log(result2)
