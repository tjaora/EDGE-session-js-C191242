// avoid var data type
const month = 'December';
let season = 'winter';
season = 'spring';

// conditions: > < === !==  <==  >==  
// &&  ||
//===(it check also type) vs == [] 

if (month === 'December'  &&  season === 'spring' )
{
    console.log("it is winter");
}

// array : []

const years = [2023, 2024, 2025];
console.log(years[0]);

//for loop

for (let index = 0; index < years.length; index++) {
    const element = years[index];
    console.log(element);
    
}

for (const element of years){
    console.log(element);
}

//function

function mul (num1, num2){
    return num1 * num2;
}

const result = mul(3, 2);
console.log(result);

//object
const student = {
    name: 'Niha',
    id: 'C191242',
    cgpa: 4.0,
    books: ['harry potter', 'james bond']
};

//access property in 3 ways

//dot notation/direct property
console.log(student.name);

//2nd way: array index
console.log(student['cgpa']);

//3rd way: dynamic property
const propertyID = 'id';
console.log(student[[propertyID]]);