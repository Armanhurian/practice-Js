//start To randomize the menus

let myarr = [
    { id: 1, name: 'arman' },
    { id: 2, name: 'ali' },
    { id: 3, name: 'amir' },
    { id: 4, name: 'reza' },
    { id: 5, name: 'kambiz' },
    { id: 6, name: 'asghar' },
]


let shuffledArray = myarr.sort((a, b) => 0.5 - Math.random())

shuffledArray.splice(0, 3).forEach((item) => {
    console.log(item);
})

console.log(shuffledArray);

//finish To randomize the menus

// start For readability of numbers

let number = 35000000;

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

//start Post Data From api or database

fetch(`http://localhost:4000/v1//courses/${courses.name}`,{
  method:'POST', 
  headers:{
    Authorization:`Bearer ${userToken}`
  }, 

}).then(res => res.json())
.then((course) =>{
    console.log(course);
})

//finish Post Data From api or database

//start The method of scoring users using array construction

let fillStarArray = Array(3).fill(0).map((score) => `<img src="fill.star.svg" ></img>`).join('');

let emptyStarArray = Array(2).fill(0).map((score) => `<img src="star.svg" ></img>`).join('');

console.log(fillStarArray);
console.log(emptyStarArray);

//finish The method of scoring users using array construction


//start get url location.search || ?age = 20

let getUrlParams = (key) => {
    let urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(key)
}

console.log(getUrlParams('htm'));  //javascript

//finish get url location.search || ?age = 20

// start practice includes methode

let description = 'arman is a front end developer'

console.log(description.includes('arman'));  //true

// finish practice includes methode

// start get dataset in list

let itemList = document.querySelectorAll('.items')

itemList.forEach((item,index) => {
    item.addEventListener('click', (event) => {
        console.log(event.target.dataset.key);
        console.log(index);
    })
})
// finish get dataset in list

let myArray = [
    { name: 'arman', age: 26 },
    { name: 'ali', age: 24 },
    { name: 'reza', age: 22 },
]

myArray.filter((item) => { console.log(item['name']); })

// start Calculate the total time of the default video

let sessions = [
    { id: 1, time: '12:09' },
    { id: 2, time: '19:21' },
    { id: 3, time: '19:15' },
    { id: 4, time: '12:00' },
    { id: 5, time: '10:00' },
    { id: 6, time: '20:00' },
    { id: 7, time: '11:00' },
    { id: 8, time: '18:12' },
]

let sum = 0

let totalFunc = (a,b) =>{
    let mapSum = sessions.map((item) => {
        
        return sum += Number(item['time'].slice(a,b))
        
        console.log(sum);
    })
    
    console.log(mapSum);
    let total = mapSum[mapSum.length - 1];
    console.log(total);
    if(total > 60){
        console.log(Math.floor(total/60));   // 2 hr
    }else{
        console.log(total);
    }
}

totalFunc(0,2)



// const totalTime = ``



// finish Calculate the total time of the default video
