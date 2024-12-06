const student = {
    name: 'Niha',
    id: 'C191242',
    cgpa: 4.0,
    books: ['harry potter', 'james bond']
};

//template literals 
//tilda sign

const about = `My name ${student.name}`;
console.log(about);

//arrow function: single parameters, no parameter, single line return, multiple parameter, multiple line return
function print (){
    console.log("Hello World"); 
}

const p = () => console.log("Hello World"); 

//for single parameter 1st bracket can be not used but for multi parameters need to use ()
const gete = amount => 100+amount; 
console.log(gete(10)); 

const isEven = num =>  num % 2 == 0;
console.log(isEven(3));
console.log(isEven(6));

//spread operator
const years = [2023, 2024, 2025];
const nextyears = [...years];

nextyears.push(2026);
console.log(nextyears);



// map()

//forEach()

//filter()

//find()