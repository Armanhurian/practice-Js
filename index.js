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

            // let getCourses = async () => {

            //     const coursesContainer = document.querySelector('#courses-container')

            //     const res = await fetch(`http://localhost:4000/courses`)

            //     const course = await res.json()

            //     return course
        // }


          // getCourses().then(course => {
          //     console.log(course);
          // })

//finish get Data From api or database

//start Post Data From api or database

         // fetch(`http://localhost:4000/v1//courses/${course.name}`,{
         //   method:'POST', 
         //   headers:{
         //     Authorization:`Bearer ${userToken}`
         //   }, 

         // }).then(res => res.json())
         // .then((course) =>{
         //     console.log(course);
         // })

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

//start create random password with click on button

let btnGenerator = document.querySelector('.btnGenerator')
let inputGenerator = document.querySelector('.inputGenerator')
let passwordLength = 8

let passwordGeneration = () =>{
    let password = ''
    let randomIp = 'aabdcghvjgqfdtjio215533414344$^&^%&^*&GHGG07689sdvfvnekj*@!&(+freygygAZFVHJ'
    
    for (let i = 0 ; i < passwordLength; i++) {
        
        let randomIndex = Math.floor(Math.random()*randomIp.length);
        // console.log(inputGenerator);
        password += randomIp[randomIndex]
    }
    console.log(password);
    
    inputGenerator.value = password
    
}


btnGenerator.addEventListener('click', () =>{
    
    
    passwordGeneration()
})

//finish create random password with click on button

// تابعی بنویسید که یک رشته را به عنوان ورودی دریافت کرده و برعکس آن رشته را به عنوان خروجی برگرداند.

const reverseFunc = (myArrayIndex) => {
   
    let newArray = myArrayIndex.split('')
    let reverseArray = newArray.reverse() 
    console.log(reverseArray.join(''));
}

reverseFunc('arman')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 4.تمرین متوسط - لیستی از اعداد: تابعی بنویسید که یک لیستی از اعداد را به عنوان ورودی دریافت کند و مجموع آن را برگرداند.


const sumNumber = (...args) => {
  
    let sum = 0
    
    args.map(item => {
        sum += item
        return sum
    }) 

    console.log(sum);
}

sumNumber(2,4,6,54,32,99)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//start set number and sum for example : 194 => 1+9+4 = 14

// let inputNumber = Number( prompt('عدد رو وارد کنید'))
// let sumNumberDigit = 0

// if(inputNumber === 0 ){
//     alert('please set your input')
    
// }else if(isNaN(inputNumber)=== true){
//     alert('not a number')
// }else if(isNaN(inputNumber) === false){
    
//     inputNumber = String(inputNumber)
    
//     for (let i = 0 ; i < inputNumber.length; i++) {
//         let myStringNumber = inputNumber[i];
//         myStringNumber = Number(myStringNumber)
//         sumNumberDigit += myStringNumber
//     }
//     console.log(sumNumberDigit);  

// }

//finish set number and sum for example : 194 => 1+9+4 = 14

//start random quote

let submitForTextBtn = document.querySelector('.submitForTextBtn')
let subTitleTextRandom = document.querySelector('.subTitleTextRandom')

let famousPeopleWordsArray = [
    {name : 'کریس ماسگرو' , text : 'موفقیت در این نیست که چه چیزی در پیش رو داریم، موفقیت در این است که چه چیزی در پشت سر به جا می‌گذاریم.'},
    {name : ' اندرو هندریکسون' , text : 'هر کسی که توانسته است چیزی را بسازد، حتما نظم و انضباط داشته است.'},
    {name : 'اسکار وایلد' , text : 'آنچه ما امتحان‌هایی سخت می‌پنداریم‌شان غالبا موهبت‌هایی با لباس مبدل‌اند.'},
    {name : 'کریس گروسر' , text : 'فرصت‌ها اتفاق نمی‌افتند، شما خالق آنها هستید.'},
    {name : 'وینستون چرچیل' , text : 'موفقیت عبارت است از رفتن از شکست به شکست دیگر بدون از دست دادن اشتیاق...'},
    {name : 'وینسنت ون ‌گوگ' , text : 'رؤیاهای‌ خودتان را بسازید در غیر این صورت فرد دیگری شما را برای ساختن رؤیایش به کار خواهد گرفت..'},
]



let randomIndex = () => {
    let createRandomIndex = Math.floor((Math.random()*famousPeopleWordsArray.length))
    console.log(createRandomIndex);
    let getRandomTextFromArray = famousPeopleWordsArray[createRandomIndex];
    subTitleTextRandom.innerHTML = getRandomTextFromArray.text

}
submitForTextBtn.addEventListener('click',() => {

    randomIndex()

})

//finish random quote

//start create table for develpment task 

let tableTasks = document.querySelectorAll('.tableTasks')
let selectOption = document.querySelector('.selectOption')
let setDeveloperTaskInput = document.querySelector('.setDeveloperTaskInput')
let tableTbodyTasks = document.querySelector('.tableTbodyTasks')
let btnSubmitTask = document.querySelector('.btnSubmitTask')
let tdOne = document.querySelector('.tdOne')
let tdTwo = document.querySelector('.tdTwo')
let tdThree = document.querySelector('.tdThree')



let createAndAppendTasks = () => {
       let tableTask = document.createElement('tr')
       tableTask.classList.add('tableTasks')
       let tableTDOne = document.createElement('td')
       let tableTDTwo = document.createElement('td')
       let tableTDThree = document.createElement('td')
       tableTask.append(tableTDOne)
       tableTask.append(tableTDTwo)
       tableTask.append(tableTDThree)
       tableTbodyTasks.append(tableTask)
       console.log(tableTbodyTasks);
    
    if(tdOne.dataset.key === selectOption.value){
           tableTDOne.innerHTML = setDeveloperTaskInput.value
       }else if(tdTwo.dataset.key === selectOption.value){
           tableTDTwo.innerHTML = setDeveloperTaskInput.value
       }else{
           tableTDThree.innerHTML = setDeveloperTaskInput.value

    }
    
}

btnSubmitTask.addEventListener('click',()=>{
    createAndAppendTasks()
})

//finish create table for develpment task 