//start To randomize the menus

let myarr = [
    {id:1 , name:'arman' },
    {id:2 , name:'ali' },
    {id:3 , name:'amir' },
    {id:4 , name:'reza' },
    {id:5 , name:'kambiz' },
    {id:6 , name:'asghar' },
]


let shuffledArray = myarr.sort((a,b) => 0.5 - Math.random())

shuffledArray.splice(0,3).forEach((item)=>{
    console.log(item);
})

console.log(shuffledArray);

//finish To randomize the menus

// start For readability of numbers

let number = 35000000 ;

console.log(number.toLocaleString());

// finish For readability of numbers

//start get Data From api or database

// for example :

let getCourses = async () => {
   
    const coursesContainer = document.querySelector('#courses-container')

    const res = await fetch(`http://localhost:4000/courses`)

    const course = await res.json()

    return course
}


   getCourses().then(course => {
     console.log(course);
   })

//finish get Data From api or database


//start The method of scoring users using array construction

let fillStarArray = Array(3).fill(0).map((score) => `<img src="fill.star.svg" ></img>` ).join('');

let emptyStarArray = Array(2).fill(0).map((score) => `<img src="star.svg" ></img>` ).join('');

console.log(fillStarArray);
console.log(emptyStarArray);

//finish The method of scoring users using array construction