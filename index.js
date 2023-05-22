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
         //   }, a

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

// start shoppingCartBasket practice

const shoppingPrudoctArray = [
    {id:1 , title:'کفش آسیکس اصل', count:1, price:2500000, photoSrc:'image/65c3e25b99953b18ea92515620dc58dd23cc3a18_1669633318.webp'},
    {id:2 , title:'کفش  برای تمرین راکتی مردانه', count:1, price:2000000, photoSrc:'image/7eab27cb93ccf379e64db6e3ddbdc65534bf412b_1658260874.webp'},
    {id:3 , title:'کفش مخصوص پیاده روی مردانه ', count:1, price:3500000, photoSrc:'image/ff2f076be6ded436a14cc1d4e5e48e79b78508ef_1610993916.webp'},
    {id:4 , title:'کفش مخصوص دوییدن مدل جردن ', count:1, price:2200000, photoSrc:'image/f8d969743686ad03922f9db5ba86a629540687a7_1635770640.webp'},
    {id:5 , title:'کفش پیاده روی مردانه مدل 01 ', count:1, price:1500000, photoSrc:'image/93931696415e386554ecbad4b3ce46f73cf88d48_1594149411.webp'},
    {id:6 , title:'کفش باشگاهی مردانه', count:1, price:700000, photoSrc:'image/119579213.webp'},
]


let myProductWrapper = document.querySelector('.myProduct')

let getAllProduct = ()=>{

    shoppingPrudoctArray.forEach((product,index)=>{
        myProductWrapper.insertAdjacentHTML('beforeend',`
        
        <div class="col-4 box-shopping">
        <img class="myProduct-image" src="${product.photoSrc}" alt="" srcset="">
        <span class="myProduct-title">${product.title}</span>
        <span class="myProduct-price">${product.price.toLocaleString()}</span>
        <button onclick="addProductToBasket(${index},${product.price},${product.id})" class="myProduct-btn">Add</button>
        </div>
        
        `)
    })
}
getAllProduct()

let textPrice = document.querySelector('.text-price')
let allProductShoppingBasketWrapper = document.querySelector('.allProductShoppingBasket')
let basketIcon = document.querySelector('.basketIcon')
let shoppingBasketArray = []
let sumPrice = 0


let addProductToBasket = (productIndex,productPrice,productID)=> {
    shoppingBasketArray.push(shoppingPrudoctArray[productIndex])
    allProductShoppingBasketWrapper.innerHTML = ''
    sumPrice += productPrice
    textPrice.innerHTML = `My Sum Price : ${sumPrice.toLocaleString()}`
    
    let resultSerach = shoppingBasketArray.filter(item => item.id === productID)
    console.log(resultSerach.length);
    // console.log(shoppingBasketArray);
    
    
    shoppingBasketArray.forEach((product)=>{
        allProductShoppingBasketWrapper.innerHTML=''
        {
       
            allProductShoppingBasketWrapper.insertAdjacentHTML('beforeend',`
            
            
            <span class="col-3 d-flex justify-content-center shopBasketBox">
            <span  class="basketshop-count">${resultSerach.length <= 1 ? product.count : product.count = resultSerach.length}</span>
            <img class="basketshop-image" src="${product.photoSrc}" alt="">
            <span class="basketshop-title">${product.title}</span>
            <span class="basketshop-price">${product.price.toLocaleString()}</span>
            </span>
            `)
            
        }   
   })
   basketIcon.classList.add('shoppingBasket-icon')
}


basketIcon.addEventListener('click',() => {
    allProductShoppingBasketWrapper.style.display = 'flex'
})

// finish shoppingCartBasket practice

// start guess a word


let randomWordBoxText = document.querySelector('.randomWordBox-text')
let randomWordBoxBtn = document.querySelector('.randomWordBox-btn')
let randomWordBoxInput = document.querySelector('.randomWordBox-input')
let randomWordBox = document.querySelector('.randomWordBox')

let randomPersianWord = ['ریکت','جاوا','زبان','ایران','امیر','آرمان','علی']

let mathRandomWord = Math.floor(Math.random()*randomPersianWord.length);
let randomIndexOfWord = Math.floor(Math.random()* randomPersianWord[mathRandomWord].length);

console.log(randomPersianWord[mathRandomWord]);
let myRandomWord  = randomPersianWord[mathRandomWord]
let xWord = myRandomWord[randomIndexOfWord]
console.log(xWord);
console.log(myRandomWord.replace(xWord,'*'));

randomWordBoxText.innerHTML= myRandomWord.replace(xWord,'*')

randomWordBoxBtn.addEventListener('click',()=>{
   if(randomWordBoxInput.value.trim() !== myRandomWord){
     randomWordBox.innerHTML = `<div class=" alert alert-danger" role="alert"> حدس شما نادرست است</div>`
   }else{
     randomWordBox.innerHTML = `<div class="alert alert-success" role="alert">حدس شما کاملا درست است</div>`
   }
})

// finish guess a word

// start Creating a phone book

let addPhoneNumberListInputText = document.querySelector('.addPhoneNumberListInput-text')
let addPhoneNumberListInputNumber = document.querySelector('.addPhoneNumberListInput-number')
let addPhoneNumberListBtn = document.querySelector('.addPhoneNumberList-btn')
let PhoneNumberListContainerTbody = document.querySelector('.PhoneNumberList-container-tbody')

let newArrayList = []

let addPhoneNumberListFunc = () =>{
    
    addPhoneNumberListBtn.addEventListener('click',function(){
        PhoneNumberListContainerTbody.innerHTML=''
        let newObjList = {
           id:newArrayList.length+1,
           name:addPhoneNumberListInputText.value.trim(),
           phoneNumber:addPhoneNumberListInputNumber.value.trim()
        }
        newArrayList.push(newObjList)
        console.log(newArrayList);
        addPhoneNumberListInputText.value=''
        addPhoneNumberListInputNumber.value=''
        localStorage.setItem('phoneList',JSON.stringify(newArrayList))
        addMember()
        
    })
}

window.addEventListener('load',()=>{
    addPhoneNumberListFunc()
    newArrayList = JSON.parse(localStorage.getItem('phoneList')) 
    addMember()
    console.log(newArrayList);
})


let addMember = () => {
    newArrayList.forEach((item)=>{
        PhoneNumberListContainerTbody.insertAdjacentHTML('beforeend',`
        
        <tr class="body-list">
        <td>${item.phoneNumber}</td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        </tr>
        `)
    })
}

// finish Creating a phone book

//start Build stars with mouse movement

let myStarMouse = document.querySelector('.myStarMouse')


window.addEventListener('mousemove',event => {
    myStarMouse.style.top = `${event.clientY}px`
    myStarMouse.style.left = `${event.clientX}px`
    // console.log(event.clientX);
    // console.log(event.clientY);
    
})


//finish Build stars with mouse movement


//sort() مرتب کردن هر آرایه ای بدون استفاده از متد 


let myNumberArray = [2,6,3,8,4,1,7,5,9,0] 



let forSortNumber = ()=>{
    for (let index = 0; index < myNumberArray.length-1; index++) {
        if(myNumberArray[index] > myNumberArray[index+1]===true){

            let temp = myNumberArray[index]
            myNumberArray[index] = myNumberArray[index+1]
            myNumberArray[index+1] = temp
            console.log(myNumberArray)
            forSortNumber()
        }
    }
}
forSortNumber()


//sort() مرتب کردن هر آرایه ای بدون استفاده از متد 



// بک گراند متحرک با حرکت به صورت نرم وآهسته

let basketballIcon = document.querySelector('.basketballIcon')


let y = 0

let x = 0

let intervalAddCount =  setInterval(()=>{
        y++
        basketballIcon.style.top = y + 'px'
        if(y>110){
            
            clearInterval(intervalAddCount)
            let intervalMinusCount = setInterval(()=>{
                y--
                basketballIcon.style.top = y + 'px'
        
                if(y===0){
                  
                 clearInterval(intervalMinusCount)
                 intervalAddCountFunc() 
                  
              }
            
              
              
            },10)
        }
        
        
        
    },10)
    
    
    
let intervalMinusCountFunc = ()=>{
        
        let intervalMinusCount = setInterval(()=>{
            y--
            basketballIcon.style.top = y + 'px'

        if(y===0){
          
         clearInterval(intervalMinusCount)
         intervalAddCountFunc() 
          
        }
    
      
      
      
    },10)
}
let intervalAddCountFunc = ()=>{
   
        let intervalAddCount = setInterval(()=>{
        y++
        basketballIcon.style.top = y + 'px'

        if(y>110){
          
         clearInterval(intervalAddCount)
         intervalMinusCountFunc() 
          
        }
    
      
      
      
    },10)
}

let addCountForLeftMotivation = setInterval(()=>{
   x++
   basketballIcon.style.left = x + 'px'
   if(x===1550){
    clearInterval(addCountForLeftMotivation)
   }
},10)

// بک گراند متحرک با حرکت به صورت نرم وآهسته

// start typing Speed Game

// let wordArray = ['آرمان','علی','مشهد','اصفهان','تهران','بابلسر','قسطنطنیه','شکسپیر','ابی','موشکافانه']
// let typeWordsSeconds = document.querySelector('.typeWordsSeconds')
// let typeWordsText = document.querySelector('.typeWordsText')
// let typeWordsInput = document.querySelector('.typeWordsInput')
// let typeWordsBtn = document.querySelector('.typeWordsBtn')
// let scoreText = document.querySelector('.scoreText')


// let randomIndexInArray= Math.round(Math.random()*(wordArray.length-1))
// let randomWordInArray = wordArray[randomIndexInArray]
// console.log(randomWordInArray.length);

// typeWordsText.innerHTML = randomWordInArray


// let randomFunc = () =>{
//     let randomIndexInArray= Math.round(Math.random()*(wordArray.length-1))
//     let randomWordInArray = wordArray[randomIndexInArray]
    
    
//     typeWordsText.innerHTML = randomWordInArray
//     let userTime = Math.ceil(randomWordInArray.length/2)+5   
//     // typeWordsText.innerHTML = randomWordInArray

//     let intervalUserTime = setInterval(()=>{
//         userTime--
//         typeWordsSeconds.innerHTML = userTime
        
//         if(userTime===0){
//             // clearInterval(intervalUserTime)
//             if(typeWordsInput.value === randomWordInArray){
//                 alert('کاملا درست بریم بعدی');
//                 clearInterval(intervalUserTime)
//                 console.log('true');
//                 randomFunc()
//                 score++ 
//                 scoreText.innerHTML = `your score is ${score}`
                
//             }else{
//                 console.log('false');
//                 alert('Game Over');
//                 clearInterval(intervalUserTime)
//                 randomFunc()
//                 score=0
//                 scoreText.innerHTML = `your score is ${score}`
                
//             }
//         }
//     },1000)
// }

// let score = 0
// let userTime = Math.ceil(randomWordInArray.length/2)+5   
// let intervalUserTime = setInterval(()=>{
//     userTime--
//     typeWordsSeconds.innerHTML = userTime
    
//     if(userTime===0){
//         // clearInterval(intervalUserTime)
//         if(typeWordsInput.value === randomWordInArray){
//             alert('کاملا درست بریم بعدی');
//             clearInterval(intervalUserTime)
//             console.log('true');
//             randomFunc()
//             score++ 
//             console.log(score);
//         }else{
//             console.log('false');
//             alert('Game Over');
//             clearInterval(intervalUserTime)
//             randomFunc()
//             score=0
//             console.log(score);
//         }
//     }
// },1000)

        
// finish typing Speed Game


// start craete timer 2:30

let vollyballIcon = document.querySelector('.vollyballIcon')
let futbolIcon = document.querySelector('.futbolIcon')

let timerGame = document.querySelector('.timerGame')

let minutes = 2
let seconds = 30

let timingIntervalForGame = setInterval(()=>{
    seconds--
    if(seconds<10){
        seconds = '0'+ seconds
        if(minutes=== 0 && seconds === '01'){
    
            clearInterval(timingIntervalForGame)
            
        }
        if(seconds === '00'){
            seconds=59
            minutes--
        } 
            
        
    } 
    // console.log(minutes);
    // console.log(seconds);
    timerGame.innerHTML = `${minutes}:${seconds}`
    
},1000)

// finish craete timer 2:30

// start create Fibonacci sequence

let num = [0,1]

for (let I = 1; I < 10; I++) {
     let sum = num[I+0] + num[I-1];
     num.push(sum)
     console.log(num);
}

// finish create Fibonacci sequence


//start crate math game 

let myRandomA = document.querySelector('.myRandomA')
let myRandomB = document.querySelector('.myRandomB')
let myRandomC = document.querySelector('.myRandomC')
let mathBtn = document.querySelectorAll('.mathBtn')
let qustionMark = document.querySelector('.qustionMark')
let alertBox = document.querySelector('.alertBox')

let a = 2
let b = 3
let c = 1

let randomA = Math.round(Math.random()*a)
let randomB = Math.round(Math.random()*b);
let randomC = Math.round(Math.random()*c);

myRandomA.innerHTML = randomA
myRandomB.innerHTML = randomB
myRandomC.innerHTML = randomC
let myNumberOfGame = randomA + randomB - randomC

console.log(myNumberOfGame);



let percent = 100

let intervalPercent = setInterval(()=>{
    percent--
        // console.log(percent);
        mathBtn.forEach((button)=>{
            button.style.background = `linear-gradient(to right, #0070ff ${percent}%, white 0%)`
        })
    
        if(percent === 0){
        clearInterval(intervalPercent)
        // alert('game over')
        alertBox.classList.add('alert')
        alertBox.classList.add('alert-danger')
        alertBox.innerHTML = 'GAME OVER'
    }
},50)


let btnClickHandler = (event)=>{
    
    console.log(event.target.innerHTML);
    if(myNumberOfGame == event.target.innerHTML){
        clearInterval(intervalPercent)
        // randomIntervalFunc()
        qustionMark.innerHTML = event.target.innerHTML
        qustionMark.style.color = 'green'
        console.log('true');
    }else{
        clearInterval(intervalPercent)
        alertBox.classList.add('alert')
        alertBox.classList.add('alert-danger')
        alertBox.innerHTML = 'GAME OVER'
    }
}


mathBtn.forEach((button)=>{
    button.addEventListener('click',btnClickHandler)
})


let randomIntervalFunc = ()=>{
    
    
    let randomA = Math.round(Math.random()*a)
    let randomB = Math.round(Math.random()*b);
    let randomC = Math.round(Math.random()*c);
    
    myRandomA.innerHTML = randomA
    myRandomB.innerHTML = randomB
    myRandomC.innerHTML = randomC
    myNumberOfGame = randomA + randomB - randomC
    console.log(myNumberOfGame);
    
    let btnClickHandler = (event)=>{
        
        console.log(event.target.innerHTML);
        if(myNumberOfGame == event.target.innerHTML){
            clearInterval(intervalPercent)
            randomIntervalFunc()
            qustionMark.innerHTML = event.target.innerHTML
            qustionMark.style.color = 'green'
            console.log('true');
        }
    }
    
    
    
    percent = 100
    
    let intervalPercent = setInterval(()=>{
        percent--
        // console.log(percent);
        mathBtn.forEach((button)=>{
            button.style.background = `linear-gradient(to right, #0070ff ${percent}%, white 0%)`
        })
        
        if(percent === 0){
            clearInterval(intervalPercent)
            // alert('game over')
            alertBox.classList.add('alert')
            alertBox.classList.add('alert-danger')
            alertBox.innerHTML = 'GAME OVER'
            // alert('GAME OVER')
        }
    },70)
    
    
    mathBtn.forEach((button)=>{
        button.addEventListener('click',btnClickHandler)
    })
    
}

randomIntervalFunc()

//finish crate math game



// پیدا کردن کاراکتر بدون تکرار در یک جمله 

let myWord = 'ali is a good player'

console.log(myWord.length);
let dsd = myWord.split('')
console.log(dsd);


for (let index = 0; index < dsd.length; index++) {
    
    let filteredSliceArray = dsd.filter((word)=>{
       return word.search(dsd[index])
    })

    // console.log(filteredSliceArray.length);
    if(filteredSliceArray.length === dsd.length-1){
    //    alert(dsd[index]);
       break
    }
}

// پیدا کردن کاراکتر بدون تکرار در یک جمله 

////////////////////////////////////////////////////////////////

// جنریت کردن عدد رندوم از بین دو عدد

let rand = (min,max) =>{
    
    let randomCount =  Math.ceil(Math.random()*(max-min-1)) + min
    console.log(randomCount);
}

rand(12,20)

// جنریت کردن عدد رندوم از بین دو عدد

////////////////////////////////////////////////////////

//شماردن تعداد صفرهای عدد ورودی

let myDefaultNumber = 20100000650

let stringyDefaultNumber = String(myDefaultNumber)

// console.log(stringyDefaultNumber);

let ziroCount = 0
 
for (let index = 0; index < stringyDefaultNumber.length-1; index++) {
    
    
    if(myDefaultNumber%10===0){
        
        ziroCount++
    }
    myDefaultNumber = Math.floor(myDefaultNumber/10);
    // console.log(myDefaultNumber);
}
console.log(ziroCount);

//شماردن تعداد صفرهای عدد ورودی

/////////////////////////////////////////////////////////////

//درست کردن تابع فاکتوریل

let numberForFactoreal = (num)=>{
    
    let gf = 1
    
    for (let i = num; i > 0; i--) {
       
        gf *= i    
    }
    console.log(gf);
}

numberForFactoreal(5)

//درست کردن تابع فاکتوریل


//تشخیص عدد جا افتاده در یک آرایه نامرتب

let myArrayRecievedFromUser = [43,41,44,45,48,46,47,40]

myArrayRecievedFromUser.sort()

let myFirstNumber = myArrayRecievedFromUser[0]

let myLastNumber;

console.log(myArrayRecievedFromUser);

for (let index = 0; index < myArrayRecievedFromUser.length; index++) {
    
    myLastNumber = myArrayRecievedFromUser[index]
    
}

let emptyArray = []

for (let i = myFirstNumber; i <= myLastNumber; i++) {

    emptyArray.push(i)

}

console.log(emptyArray);

let desiredNumber;

for (let index = 0; index < emptyArray.length; index++) {
    
    // console.log(emptyArray[emptyArray.length-1]);
    // console.log(myArrayRecievedFromUser[myArrayRecievedFromUser.length-1]);
    // console.log(emptyArray[emptyArray.length-index] === myArrayRecievedFromUser[myArrayRecievedFromUser.length-index]);
    if (emptyArray[emptyArray.length-index] === myArrayRecievedFromUser[myArrayRecievedFromUser.length-index]) {
        console.log('true');
    }else{
        console.log('false');
        desiredNumber = emptyArray[emptyArray.length-index];
        console.log(desiredNumber);  //برگردوندن اون عدد جا افتاده
        break
    }

}

//تشخیص عدد جا افتاده در یک آرایه نامرتب

/////////////////////////////////////////////////////////////////////////

//برعکس کردن اعداد ورودی 

let defaultNumber = 48765

let stringNumber = defaultNumber.toString()

// console.log(typeof(defaultNumber));
// console.log(typeof(stringNumber));


if(stringNumber.length===1){

    console.log(defaultNumber);

}else{

    let slicedNumber = stringNumber[stringNumber.length-1]
    
    for (let index = 2; index < stringNumber.length+1; index++) {
        
        let concatedNumber = stringNumber.concat(stringNumber[stringNumber.length-index])
        
        slicedNumber += concatedNumber.slice(concatedNumber.length-1,concatedNumber.length);
        
        
    }
    console.log(slicedNumber);
    
}

//برعکس کردن اعداد ورودی 

////////////////////////////////////////////////////////////////////////////////

//start Write a function that returns all sets of three elements that sum to 0.

// Examples

// threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]

// threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]

// threeSum([1, 2, 3]) ➞ []

// threeSum([1]) ➞ []

// =>

let myArr = [0, 0, 0, 5, -5]

let newArr = []

for (let i = 0; i < myArr.length-2; i++) {

    let sumNum = 0
    
    let threeSomeArr = myArr.slice(i,i+3);

    console.log(threeSomeArr);

    threeSomeArr.forEach(item => {
        sumNum +=item
    })
    
    if(sumNum === 0){
        newArr.push(threeSomeArr)
    }

    console.log(newArr);
}

//finish Write a function that returns all sets of three elements that sum to 0.


//start Return the Remainder from Two Numbers

function remainder(x, y) {
    let Remainder = x % y
    return Remainder
}
console.log(remainder(12, 5));


//finish Return the Remainder from Two Numbers

/////////////////////////////////////////////////////////////////////////////

//start Add up the Numbers from a Single Number

// Create a function that takes a number as an argument.
//  Add up all the numbers from 1 to the number you passed to the function. 
//  For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.



function addUp(num) {
    let firstNum = 0
	for (let i = 0; i <= num ; i++) {
        firstNum += i
    }
    console.log(firstNum);
}
addUp(4)


//finish Add up the Numbers from a Single Number

//برای توان از متد زیر استفاده کن

console.log(Math.pow(2,5)); 

//2**5


////////////////////////////////////////////////////////////

// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" 
// if the digit 7 appears in the array.
//  Otherwise, return "there is no 7 in the array".

let emptyArr = []

function sevenBoom(arr) {

	// arr.forEach(item=>{
	//  let stringItem	= item.toString()
	//  let searchSeven = stringItem.search(/7/i)
    //  //console.log(searchSeven)

    //  if(searchSeven != -1){
    //     console.log(item);
    //     emptyArr.push(item)
    //  }
     
    // })

    // console.log(emptyArr);
    // if(emptyArr.length !== 0){
    //     return 'Boom!';
    // }else{
    //     return "there is no 7 in the array";
    // }

    ///7/.test(arr) ?  console.log('Boom!') : console.log('there is no 7 in the array');;



    return (arr.join().includes('7') ? "Boom!" : "there is no 7 in the array");
    
}
console.log(sevenBoom([1,2,3,4,107]));

////////////////////////////////////////////////////////////////////////////////////////////////

//برای قرار دادن آرایه دوم بین دو اجزای آرایه اول

function tuckIn(arr1, arr2){
    
    console.log([arr1[0],...arr2,arr1[1]]);
    
}

tuckIn([[1,10],[11,21]],[[2,3,4]])

/////////////////////////////////////////////////////////////////////////////////////////////////

//محاسبه کنید که یک عدد دورقمی از برعکسش بزرگتر است مثل 32>23 

function largestSwap(num) {
    num.toString()
    return(num.toString()[0] < num.toString()[1] ? false : true)
}
console.log(largestSwap(32));

//////////////////////////////////////////////////////////////////////////////////////////////////

//ساخت دایره با محیط و مساحت مشخص 
  
class Circle {
    constructor(mySide) {

        this.mySide = mySide

    } 
    getArea(){return Math.PI * (Math.pow(this.mySide,2)) } 
    getPerimeter(){return Math.PI * (2*this.mySide) } 
}

console.log(Math.PI);

//////////////////////////////////////////////////////////////////////////////////////////////////

//محاسبه تعداد ارقام فاکتوریل عددی که توسط کاربر وارد شده

let factoreal = 1

function noPermsDigits(n){
    for (let i = n ; i > 0; i--) {
        factoreal *= i
    }
    console.log(factoreal);

    console.log(factoreal.toString().length);
}

noPermsDigits(1)


/////////////////////////////////////////////////////////////////////////////////////////////////

//اعداد رو طوری سه تا سه تا تقسیم کن تا اعداد اول و آخر برابر و عدد وسط متفاوت باشد

let lookCount = 0

function countBoomerangs(arr) {
	for (let index = 0; index < arr.length; index++) {
        if(arr[index] === arr[index+2] && arr[index]!== arr[index+1]){
            console.log('true');
            lookCount++
        }else{
            console.log('false');
        }
        
    }
     console.log(lookCount);
}

countBoomerangs([4, 4, 4, 8, 4, 8, 4])


///////////////////////////////////////////////////////////////////////////////////////////////////

// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

let generationArray =[
    {Generation:-3,	male:"great grandfather" , female :"great grandmother"},
    {Generation:-2,	male:"grandfather" , female :"grandmother"},
    {Generation:-1,	male:"father" , female :"mother"},
    {Generation:0,	male:"me!" , female :"me!"},
    {Generation:1,	male:"son" , female :"daughter"},
    {Generation:2,	male:"grandson" , female :"granddaughter"},
    {Generation:3,	male:"great grandson" , female :"great granddaughter"},
]

function generation(x, y) {
	generationArray.forEach(item=>{
        if(y === "m" && x === item.Generation ){

            console.log(item.male);

        }else if (y === "f" && x === item.Generation ){

            console.log(item.female);

        }
    })
 

}
generation(2, "f");

// خواندن کد زیر هم خالی از لطف نیست 

// function generation(x,y) {
// 	let f = ['great grandmother','grandmother','mother','me!','daughter','granddaughter','great granddaughter'];
// 	let m = ['great grandfather','grandfather','father','me!','son','grandson','great grandson'];
// 	return y === 'm' ? m[3+x] : f[3+x];
// }


//////////////////////////////////////////////////////////////////////////////////////////////

// This Triangular Number Sequence is generated from 
//  a pattern of dots that form a triangle.
//  The first 5 numbers of the sequence, or dots, are:   1, 3, 6, 10, 15  

// triangle(5) ➞ 15


let firstNum = 0

function triangle(n) {
	for (let i = 1 ; i <= n; i++) {
        firstNum = firstNum + i 
    }
    return firstNum;
}

console.log(triangle(8));

//خواندن کد زیر هم خالی از لطف نیست با روش دیگر 

function triangle2(n){
    return n * (n+1)/2
}
console.log(triangle2(8));

///////////////////////////////////////////////////////////////////////////////////////////////////

// کمترین و بیشترین اعضای یک آرایه را جدا کنید

function minMax(arr) {
    let emptyArr = []
	
    emptyArr.push(Math.max(...arr))
    emptyArr.unshift(Math.min(...arr))

    console.log(emptyArr);

}
minMax([-13, -72, 98, 43, 24, 65, 31,112])

/////////////////////////////////////////////////////////////////////////////////////////////////////

//برای محاسبه تعداد روزهای بین دو تاریخ

function getDays(date1, date2) {

    // one day = 1000 * 60 * 60 * 24

    return  Math.ceil((Math.abs(date2 - date1))/ (1000 * 60 * 60 * 24));

    
}

console.log(getDays(new Date("jun 12 2015"),new Date("july 1 2015")));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// تبدیل آبجکت به آرایه با دو روش زیر

//روش اول

function toArray1(obj) {
	return Object.keys(obj).map(item => [item , obj[item]])
}

console.log(toArray1({age : 19 , name:'arman'}));

//روش دوم و بهتر

function toArray2(obj) {
    return Object.entries(obj)
}

console.log(toArray1({age : 19 , name:'arman'}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//برای مرتب کردن لیست قیمت بر اساس ارزان تر و گران تر

function sortDrinkByPrice(drinks) {
	return drinks.sort((a, b) => a.price - b.price);
}

console.log(sortDrinkByPrice([
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//از آنجا که میدانیم ارایه [3,[1,2]]  دو عضو دارد اما میخواهیم بدون در نظر گرفتن آرایه تعداد اجزا را بدست بیاورید که در این آرایه 3 میباشد

function getLength(arr) {
    let myEmptyArray = []
    
    arr.forEach(item=>{
        
        let forEachFunc = (item)=>{
            if(typeof(item)==='object'){
                item.forEach(item=>{
                    forEachFunc(item);
                })
            }else{
                myEmptyArray.push(item)
            }
        }

        forEachFunc(item)
    })

    return myEmptyArray.length
}

console.log(getLength([2, [3], 4, [7]]));


///////////////////////////////////////////////////////////////////////////////////////////////////////

function histogram(arr, char) {
    let histogramText = ''
	for (let index = 0; index < arr.length; index++) {

        histogramText += char.repeat(arr[index]) + '\n'
    }
    return histogramText;
	
}

console.log(histogram([1, 3, 4], "#"));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// در نظر بگیرید  f(x)= x^b تابع
// مشتق بگیرید سپس 
// را در آن جایگذاری کنید m 

function derivative(b, m) {
	return b * ( Math.pow( m , b - 1 ));
}

console.log(derivative(9, -5));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// اطلاعات جدید را به آبجکت اضافه کنید

//==> روش اول

function addName1(obj, name, value) {
	
    console.log({...obj , [name] : value});
}

addName1({}, "Brutus", 300)

//==> روش دوم

function addName2(obj, name, value) {
	
    let o = {[name]:value}
    
    console.log(Object.assign(obj,o));

}
addName2({"aptos" : 100},"Brutus", 300)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//تعداد چوب کبریت هایی که باهاش خانه میسازیم را بدست بیار

function matchHouses(step) {
    
    let stepCount = 1
        
    for (let index = 1; index <= step; index++) {
        
        stepCount += 5
    }
    return stepCount;
  
}

matchHouses(87)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//remove falsey value from array

function compact(arr) {

 let myemptyArr = []
    
for (let i = 0; i < arr.length; i++) {

    if(arr[i]){
        myemptyArr.push(arr[i])
    }
    
}	
 return myemptyArr

}


console.log(compact([0, 1, false, 2, "", 3]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// تابعی بنویسید که دو مقدار دریافت کند اولی مضرب و دومی تعداد آن مضرب و آرایه آن را برگرداند


function arrayOfMultiples (num, length) {

	let newArr = []

    newArr.push(num)

    for (let index = 1; index < length; index++) {
        
      newIndex = num + (num*index) 
      
      newArr.push(newIndex)
    }
    return newArr;
}

console.log(arrayOfMultiples (12, 10));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function charCount(myChar, str) {
    let  i = 0
	for (let index = 0; index < str.length; index++) {
        if(myChar == str[index] ) {
            i++
        }
    }
    return i;
}

console.log(charCount("b", "big fat bubble"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//حاصل ضرب اجزای وارد شده به جز 0

function combinations(...items) {
    let combin = 1
	let toStringItem = items.toString()
    let craeteArray = toStringItem.split(',')
    craeteArray.forEach(item => {
       if(item!=0){
           combin *=item     
       } 
    })
    return combin;

}

console.log(combinations(2,3,4));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// تعداد اعضای آرایه بدون تکرار را بشمار اگر مثبت ها بیشتر از منفی ها بود درست را برگردان در غیر این صورت غلط را برگردان



function isPositiveDominant(a) {

    let newArray = []

	for (let index = 0; index < a.length; index++) {

        if(a[index] !== a[index+1]){
            newArray.push(a[index])
        }
     
    }
    console.log(newArray);

    let minus = 0
    let positive = 0

    newArray.forEach(item => item < 0 ? minus++ : positive++)

    console.log(minus);
    console.log(positive);

    if(positive > minus){
        return 'true'
    }else{
        return 'false'
    }

    

    // const positive = new Set(a.filter(a=> a>0))
    // const negative = new Set(a.filter(a=> a<0))
    // console.log(positive.size);
    // console.log(negative.size);

}

console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//محاسبه سبد خرید به سنت و تشخیص اینکه موجودی کافی است یا خیر

function changeEnough(change, amountDue) {

   let sumForShopping = (change[0]/4) + (change[1]/10) + ((change[2]*5)/100) + (change[3]/100)

   if(sumForShopping < amountDue){
        return false
   }else{
        return true  
   }
   
}

console.log(changeEnough([0, 0, 20, 5], 0.75));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//محاسبه اهم

function seriesResistance(arr) {
    let sumItem = 0
	arr.forEach( item => {
       sumItem += item 
    })
    if(sumItem <= 1){
       return `${sumItem} ohm`
    }else{
        
        return `${sumItem} ohms`
    }
}

console.log(seriesResistance([10,12, 1, 10]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//حروف کوچک را از بین کل حروف پیدا کنید

function detectWord(str) {
    let concatWord = ''
	for (let index = 0; index < str.length; index++) {
        
        if(str[index] === str[index].toLocaleLowerCase()){
            concatWord += str[index]
        }
    }
    return concatWord;
}

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//با دادن یک عدد، آرایه ای حاوی دو نیمه عدد را برگردانید. اگر عدد فرد است، سمت راست ترین عدد را بزرگتر کنید.

function numberSplit(n) {
	let emptyArr = []
    let firstNum = Math.floor(n/2)
    let secondNum = n - firstNum
    emptyArr.push(firstNum)
    emptyArr.push(secondNum)
    return emptyArr;
}

console.log(numberSplit(-9));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//موجود در یک آرایه را برمی گرداند true  اتابعی ایجاد کنید که تعداد مقادیر  

function countTrue(arr) {

    let myEmptyArray = []

	arr.forEach( item => {
        if(item){
            myEmptyArray.push(item)
        }
    })
    return myEmptyArray.length
}

console.log(countTrue([true,false,false]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//یک تابع برای انجام عملیات حسابی پایه ایجاد کنید که شامل جمع، تفریق، ضرب و تقسیم روی یک عدد رشته است 

function arithmeticOperation(n) {

    let createArray = n.split('')
    let findSumIndex = createArray.findIndex(item => {
        if(item == '+' || item == '/' || item == '*' || item == '-'){
            return item
        }
    })
    let firstNum = Number(n.slice(0,findSumIndex).trim())
    let secondNum = Number(n.slice(findSumIndex+1,n.length).trim())

    if(createArray[findSumIndex] === '+'){
        return firstNum + secondNum
    }
    if(createArray[findSumIndex] === '-'){
        return firstNum - secondNum
    }
    if(createArray[findSumIndex] === '*'){
        return firstNum * secondNum
    }
    if(createArray[findSumIndex] === '/'){
        if(secondNum === 0){
            return -1
        }else{
            
            return firstNum / secondNum
        }
    }
    
}

console.log(arithmeticOperation("12 * 12"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی بنویسید که حداقل تعداد مبادله را برای تبدیل رشته باینری اول به رشته دوم برمی گرداند

function minSwaps(s1, s2) {

    let changeCount = 0

	let s1Array = s1.split('')
	let s2Array = s2.split('')

    console.log(s1Array);
    console.log(s2Array);

    for (let index = 0; index < s1Array.length; index++) {

        if(s1Array[index] === s2Array[index]){
            //console.log(index);
        }else{
            changeCount++
        }  
    }
    return changeCount/2
}

console.log(minSwaps("01100100100111", "10110010100110"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// آرایه های زیر را به ترتیب قرار بده 

function sortIt(arr) {
	return arr.sort((a,b) => a - b)
}

console.log(sortIt([[3], 4, [2], [5], 1, 6]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toBoolArray(word) {

    let emptyWordArr = []

    let alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for (let index = 0; index < word.length; index++) {
       
        let findIndexOfAlphabet = alphabetArray.findIndex(item =>{
           return item == word[index]
        })

        let wordId = findIndexOfAlphabet + 1

        if(wordId %2 === 0){

            emptyWordArr.push('false')
            
        }else{

            emptyWordArr.push('true')
        }
    }

    return emptyWordArr;
}

console.log(toBoolArray("charming"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

//روش اول

function product(...a){

    let firstZarbIndex = 1 
    let secondZarbIndex = 1 
    firstZarbIndex *= a[0]
    secondZarbIndex *= a[a.length-1]

    return function product (...b){
        firstZarbIndex *= b[0]
        secondZarbIndex *= b[b.length-1]

        return function product (...c){

            firstZarbIndex *= c[0]
            secondZarbIndex *= c[c.length-1]

            return firstZarbIndex + secondZarbIndex
        }
    }
}
console.log(product(10,2)(5,0)(2,3));


//روش دوم

// function product (x1,y1){
//     return function product(x2,y2){
//         return function product (x3,y3){
//             return x1 * x2 * x3 + y1 * y2 * y3;
//         }
//     }
// }
// console.log(product(10,2)(5,0)(2,3));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fix bug this broken code!

function checkEquals(arr1, arr2) {

	if (arr1.join('') === arr2.join('')) {

  	return true 

    }else {

  	return false
    }
}

console.log(checkEquals([4, 6], [4, 6]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که یک عدد را به عنوان آرگومان دریافت کند و پیام خطای مناسب را برگرداند. شما باید این کار را بدون استفاده از سوئیچ یا دستور if انجام دهید.

function error(n) {
	return n === 1 ?  "Check the fan: e1" :n === 2 ? "Emergency stop: e2" :n === 3 ? "Pump Error: e3" :n===4 ? "c: e4" :n===5 ? "Temperature Sensor Error: e5" : 101
}

console.log(error(5));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getFrequencies(arr) {

    let newObj = {}

    for (let index = 0; index < arr.length; index++) {
        
        newObj[arr[index]] ? newObj[arr[index]]++ : newObj[arr[index]] = 1
    }
    console.log(newObj);
}

getFrequencies([1, 2, 3, 3, 2])

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let reduceArray = [1,2,3,4,5]

reduceArray.reduce((prev,current)=>{
    console.log(prev);
    console.log(current);
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// محاسبه حجم مخروط

function coneVolume(h, r) {
	return ((Math.PI * h * Math.pow(r,2))/3).toFixed(2)
};

console.log(coneVolume(15, 6));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی بنویسید که در صورت اینکه عدد صحیحی که ارقامش تکرار شود درست را برگرداند در غیر اینصورت غلط را برگرداند

function isRepdigit(num) {
    
    if(num<0){
        return false 
    }else{
        let stringNum = num.toString()
        let flag = true
        if(num<10){
           return flag
        }else{

            for (let index = 0; index < stringNum.length; index++) {
                if(stringNum[index] !== stringNum[index+1]){
                    flag = false
                }else{
                    return flag
                }
            }
            return flag
        }

    }
}

console.log(isRepdigit(111));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//بزرگترین عدد را از بین عدد چند رقمی زیر پیدا کنید

function highestDigit(number) {

    let createString = number.toString()

    let createArray = createString.split('').sort()
	
    return Number(createArray[createArray.length-1]);
}

console.log(highestDigit(7495037));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//تمام اعضای یک آرایه را به توان 3 برسان و با هم جمع کن

function sumOfCubes(nums) {
    if(nums === []){
        return 0
    }else{
        let sumNum = 0
        nums.map(item=>{
            sumNum += Math.pow(item,3)
        })
        return sumNum;
    }
}

console.log(sumOfCubes([2]));

///////////////////////////////////////////////////////////////////////////////////////////////////////

let text = 'Arman hurian'

text = text.replace('hurian','sadeghi')   // ==> روش اول

//text = text.replace(/hurian/g ,'sadeghi')   // ==> روش دوم

console.log(text);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// بزرگترین مضرب مشترک بین دو عدد را محاسبه کنید

function lcm(n1 , n2) {
	if(n2 % n1 === 0){
      return n2;
    }else{
      return n1 * n2; 
    }
}

console.log(lcm(8, 16));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//صفرهای اضافه را بردار 

function removeLeadingTrailing(n) {
	console.log(Math.abs(n));
}

removeLeadingTrailing("00402.000")

////////////////////////////////////////////////////////////////////////////////////////////////////////

// استرینگ هارا حذف کن

function filterArray(arr) {
   return	arr.filter(item => typeof(item) !== 'string')
}

console.log(filterArray([1, "a", "b", 0, 15]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//عدد مورد نظر کاربر را پیدا کنید در آبجکت و از بین rammstein

let random = Math.floor(Math.random() * 100 )

obj = {absinth: 100, whiskey: 100, "Rammstein A": 100, "Rammstein B": 50, "Rammstein C": random }

function getVodkaBottle(obj, num) {

    let keysObj = Object.keys(obj)


    let mapObj = keysObj.filter(item => {
        if (item.includes('Rammstein') && obj[item] === num){
                
            return item
        }
    })

    return mapObj.join('')
}

console.log(getVodkaBottle(obj, 50));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate the Total Price of Groceries

function getTotalPrice(groceries) {
    let totalPrice = 0
	for (let index = 0; index < groceries.length; index++) {
        
       totalPrice += (groceries[index].price * groceries[index].quantity)

    }
    return totalPrice
}

console.log(getTotalPrice([
	{ product: "Chocolate", quantity: 1, price: 0.10 },
	{ product: "Lollipop", quantity: 1, price: 0.20 }
]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////


function shiftToRight(x, y) {
	return Math.floor(x/Math.pow(2,y))
}

console.log(shiftToRight(4666, 6));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// تخفیف را پیدا کنید
//تابعی ایجاد کنید که دو آرگومان قیمت اصلی و درصد تخفیف را به صورت اعداد صحیح بگیرد و قیمت نهایی را پس از تخفیف برگرداند

function dis(price, discount) {

    return price * (1 - discount/100)

}    


console.log(dis(89, 20));

/////////////////////////////////////////////////////////////////////////////////////////////////

function getOnlyEvens(nums) {
    let emptyArray = []
	for (let index = 0; index < nums.length; index++) {
        if(nums[index] % 2 === 0 && index % 2 === 0){
           emptyArray.push(nums[index])
        }    
    }
    return emptyArray
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));

///////////////////////////////////////////////////////////////////////////////////////////////////

//با توجه به یک رشته، تمام کلماتی که طول فرد دارند را معکوس کنید. کلمات با طول زوج تغییر نمی کنند.

function reverseOdd(str) {

	let createArray = str.split(' ')

    let emptyArray = []

    for (let index = 0; index < createArray.length; index++) {
        if(createArray[index].length %2 !== 0 ){

            let reverseArr = [...createArray[index]].reverse()

            emptyArray.push(reverseArr.join(''))

        }else{
            emptyArray.push(createArray[index])
        }
    }
    return emptyArray.join(' ')
}

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function to check whether the given parameter is an Object or not.

function isObject(value) {
	console.log( value instanceof Object);
}

isObject([1,2,3])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//با توجه به عدد n، تابعی بنویسید که PI را به n رقم اعشار برمی گرداند.

function myPi(n) {
	return Number((Math.PI).toFixed(n));
}

console.log(myPi(5));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//انتگرال را محاسبه کنید

function integral(b, m, n) {
	return (Math.pow(n,b+1) - Math.pow(m,b+1))
}

console.log(integral(2, 4, 7));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که نام کشور و مساحت آن را به عنوان آرگومان در نظر گرفته و مساحت نسبت کشور از کل خشکی جهان را برمی گرداند.

function areaOfCountry(name, area) {

	let totalAreaOfCountry = ((area/148940000)*100).toFixed(2)
  
    return `${name} is ${totalAreaOfCountry}% of the total world's landmass`
}


console.log(areaOfCountry("USA", 9372610));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countNumberOfOccurrences(obj) {

	let createArr = Object.values(obj)

    console.log(createArr);

    return createArr.reduce((obj1,key)=>{

        if(!obj1[key]){
            
            obj1[key] = 1

        }else{
            
            obj1[key] += 1
        }

        return obj1

    },{})
}

console.log(countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که دو عدد و یک عملگر ریاضی + - / * را بگیرد و با اعداد داده شده یک محاسبه را انجام دهد.

function calculator(num1, operator, num2) {
	if(operator === "+"){
        return num1 + num2
    }
    if(operator === "*"){
        return num1 * num2  
        
    }
    if(operator === "/"){
        return num1 / num2  
        
    }
    if(operator === "-"){
        return num1 - num2  

    }
}

console.log(calculator(2, "*", 2));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که یک رشته را بگیرد و تعداد (تعداد) مصوت های موجود در آن را برمی گرداند.

function countVowels(str) {
    let countVowel = 0
    for (let index = 0; index < str.length; index++) {
       
        if(str[index] ==='a' ){
            countVowel ++
        }
        if(str[index] ==='e' ){
            countVowel ++
        }
        if(str[index] ==='i' ){
            countVowel ++
        }
        if(str[index] ==='o' ){
            countVowel ++
        }
        if(str[index] ==='u' ){
            countVowel ++
        }
        
    }
    return countVowel
}

console.log(countVowels("Celebration"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//جاهای سانسور شده را با ورودی بعدی پر کن و جمله ی اصلی را برگردان

function uncensor(str, vowels) {
    for (let index = 0; index < vowels.length; index++) {
        
        let createArr = str.split('')
        let findstrIndex = createArr.findIndex(item=>{
            return item.includes('*')
        })
        createArr.splice(findstrIndex,1,vowels[index])
        str = createArr.join('')
    }
    return str;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که آرایه ای از اعداد را بگیرد و دومین عدد بزرگ را برگرداند.

function secondLargest(arr) {
	let sortedArr = arr.sort((a,b)=>{
        return a - b 
    })

    return sortedArr[sortedArr.length-2];
}

console.log(secondLargest([25, 143, 89, 13, 105]));

/////////////////////////////////////////////////////////////////////////////////////////////////

class Retangle {
    constructor(height , width) {

        this.height = height;
        this.width = width;
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی بنویسید که زمان t1 و زمان t2 را به خود اختصاص دهد و تعداد ساعات سپری شده بین این دو زمان را برگرداند.

function hoursPassed(t1, t2) {
    let firstNum = 0
    let secondNumber = 0
	if(t1.includes('AM')){


        let findForCut1 = [...t1].findIndex(item =>{
           return item === ':'
        })

        firstNum = Number(t1.slice(0,findForCut1)) 
        
    }
    if(t2.includes('AM')){
        
        let findForCut2 = [...t2].findIndex(item =>{
           return item === ':'
        })
    
        secondNumber = Number(t2.slice(0,findForCut2))
    }
    if(t1.includes('PM')){

        let findForCut1 = [...t1].findIndex(item =>{
            return item === ':'
        })
 
         firstNum = Number(t1.slice(0,findForCut1)) + 12
       
         
    }
    if(t2.includes('PM')){
            
            let findForCut2 = [...t2].findIndex(item =>{
                return item === ':'
            })
                
            secondNumber = Number(t2.slice(0,findForCut2)) + 12
            
    }
    
    if(secondNumber <= firstNum){
        return "No time has passed."
    }else{
        return `${secondNumber - firstNum} hours` 
    }
}

console.log(hoursPassed("2:00 PM", "4:00 PM"));

/////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که تعداد ارقام عدد صحیح را بشمارد

function count(n) {
	return [...String(Math.abs(n))].length
}

console.log(count(-314890));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//فرمول لژاندر نماي بزرگترين توان يك عدد p اول را مي‌يابد كه فاكتوريل تعدادي n را تقسيم مي‌كند.


function legendre(p, n) {


    let sumFactoreal = 0

    for (let i = 1; i < n ; i++) {
         
        if(n > Math.pow(p,i)){
    
            sumFactoreal += Math.floor(n/(Math.pow(p,i)))
        }
    }

    return sumFactoreal


    
}

legendre(3, 600)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//یک تابع زائد بنویسید که یک رشته str را بگیرد و تابعی را برگرداند که str را برمی گرداند.

function redundant(str) {

	return function f1 (){
       return str
    }

}

console.log(redundant("pear"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isTrue(relation) {
	let removeTrailing = relation.replace(">",",").replace("<",",").replace("=",",")
    let createArray = removeTrailing.split(',')
    let firstNum = Number(createArray[0]) 
    let secondNum = Number(createArray[1]) 
    if(relation.includes(">")){

        return firstNum > secondNum

    }else if(relation.includes("=")){
        
        return firstNum == secondNum
    }else{
        
        return firstNum < secondNum
    }
}

console.log(isTrue("15=137")); //false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let array = [1,2,3,4]

// let reduceArr = array.reduce((prev,current) => {
    
//     return prev + current

// })

// console.log(reduceArr);


const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//با توجه به آنچه که قرار است تایپ شود و آنچه در واقع تایپ شده است، تابعی بنویسید که کلید(های) شکسته را برمی گرداند. تابع به نظر می رسد:

function findBrokenKeys(str1, str2) {
    let newEmptyArr = []

	for (let index = 0; index < str1.length; index++) {
        
        if(str1[index] != str2[index]){
            
            newEmptyArr.push(str1[index]) 
        }
        
    }

    return [...new Set(newEmptyArr)]

  
}

console.log(findBrokenKeys("beethoven", "affthoif5"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//برای تبدیل نودلیست به آرایه

let options = document.querySelectorAll('option')

console.log([...options]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function reduceFunc (){
    


    let reducerArr = [1,2,3,4,5]
    
     return reducerArr.reduce((prev,currentValue)=>{
        if (currentValue > 0) {
            const doubled = currentValue * 2;
            return [...prev, doubled];
          }
        return prev;
    },[])
}
console.log(reduceFunc ());

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testJackpot(result) {
	if([...new Set(result)].length === 1){
        return true
    }else{
        return false
    }
}

console.log(testJackpot(["abc", "abc", "abc", "abc"]) );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiply (arr){
   
   let emptyArr = [] 

   return function zarbHandel(num){
     arr.forEach(item => {
        emptyArr.push(item * num) 
    })
    return emptyArr
}
}

console.log(multiply([1, 2, 3])(2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function asciiCapitalize(str) {
	let mapArray = [...str].map(item=>{
        if(item.charCodeAt() % 2 === 0){
           return item.toLocaleUpperCase()
        }else{
            return item
        }
    })
    return mapArray.join('')

}

console.log(asciiCapitalize("to be or not to be!"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostExpensive(obj) {
	let createArrayValues = Object.values(obj)
    let max = Math.max(...createArrayValues)
    let filteredArray = Object.keys(obj).filter(item=>{
       return  obj[item] === max
    })

    return 	`The most expensive one is the ${filteredArray}` 
}

console.log(mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findNemo(sentence) {

	let createArray = sentence.split(' ')

    let findIndexArray = createArray.findIndex((item)=>{
        return item === 'Nemo'
    })

    if(findIndexArray !== -1){

        return `I found Nemo at ${findIndexArray + 1}!`

    }else{
        
        return `I can't find Nemo :(`
    }
}

console.log(findNemo("Nemo is me"));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function maximumScore(tileHand) {

    let sumScore = 0

	tileHand.forEach(item => {
        sumScore += item.score
    })
    return sumScore
}

console.log(maximumScore(
    [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ]
));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//در هر آرایه ورودی، هر عدد به جز دو عدد حداقل یک بار تکرار می شود. تابعی بنویسید که دو عدد یکتا را برمی گرداند.



function returnUnique(arr) {

   let filteredArray = arr.filter(x =>{
    return arr.filter(y =>{
        return y === x
    }).length === 1
     
   })

   console.log(filteredArray);
}

returnUnique([1, 9, 8, 8, 7, 6, 1, 6])

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function daysUntil2021(date) {

	let myDate1 = new Date('jan 1 2021') 

	let myDate2 = new Date(date) 

    console.log(myDate2);

    let createDay = 1000*60*60*24

	let resualtDate = myDate1 - myDate2

    if(resualtDate/createDay > 1){

        return `${resualtDate/createDay} days`
    }else{
        
        return `${resualtDate/createDay} day`
    }

}

console.log(daysUntil2021("10/22/2020"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function mirror(arr) {

 let newArr = arr.map(item => {
    return item
 }) 
 
 newArr.pop()

 let newReverseArr = newArr.reverse()
 
 for (let index = 0; index < newReverseArr.length; index++) {
    
    arr.push(newReverseArr[index])
}
  return arr
}

console.log(mirror([0, 2, 4, 6]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function primeInRange(n) {

    let isPrime = true
        
        for (let i = 2; i <  n; i++) {

            if(n % i === 0){

                isPrime = false
        
            }
        }
        

        if(isPrime){

           return true

        }else{

           return false
        }
}

console.log(primeInRange(63));

///////////////////////////////////////////////////////////////////////////////////////////////////

//مجموع تمام آیتم های یک آرایه را برگردانید، جایی که هر آیتم در شاخص آن ضرب می شود (بر اساس صفر). برای آرایه های خالی، 0 را برگردانید.

function indexMultiplier(arr) {

    let sumWithIndex = 0

	for (let index = 0; index < arr.length; index++) {
        
        sumWithIndex += arr[index] * index

    }
    return sumWithIndex
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));

////////////////////////////////////////////////////////////////////////////////////////////////

function splitNCases(str, cases) {

    let newArray = []

	let itemsLengthInArray = str.length / cases

    if(Math.floor(itemsLengthInArray) === 0){
        return [ "Error" ]
    }else{

        for (let i = 0; i < str.length/itemsLengthInArray; i++) {
            
            newArray.push(str.slice( i*itemsLengthInArray ,(i*itemsLengthInArray) + itemsLengthInArray)) 
    
        }
        return newArray
    }

}

console.log(splitNCases("Strengthened", 6));

/////////////////////////////////////////////////////////////////////////////////////////////////////

//تابعی ایجاد کنید که دو آرایه "مرتب شده" از اعداد را بگیرد و آرایه ای از اعداد را که در هر دو آرایه ورودی مشترک است برمی گرداند.

function commonElements(arr1, arr2) {

    let newArr = []

	arr1.forEach(item => {
        //console.log(item);
        if(arr2.includes(item)){
            newArr.push(item)
        }
    })
    let myArr = new Set(newArr)

    return [...myArr]
}

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//یک آرایه خاص است اگر هر شاخص زوج دارای یک عدد زوج و هر شاخص فرد دارای یک عدد فرد باشد. تابعی ایجاد کنید که اگر آرایه خاصی باشد true و در غیر این صورت false را برمی گرداند.

function isSpecialArray(arr) {

    let isTrue = true

    for (let index = 0; index < arr.length; index++) {
        
        if(index % 2 !== 0 && arr[index] % 2 === 0 || index % 2 === 0 && arr[index] % 2 !== 0){
            isTrue = false
        }else{
            isTrue
        }
    }

    return isTrue
}

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//start regex practice

let myText = `This section is dedicated to the JavaScript language itself, 
and not the parts that are specific to Web pages or other host environments.
For information about APIs that are specific to Web pages, please see Web APIs and DOM.
The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization
API specification (ECMA-402). As soon as one browser implements a feature, 
we try to document it. This means that cases where some proposals for new ECMAScript 
features have already been implemented in browsers,
documentation and examples in MDN articles may use some of those new features.
Most of the time, this happens between the stages 3 and 4,\
and is usually before the spec is officially published.`

console.log(/ .... / .exec(myText));


//finish regex practice

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//با توجه به یک رشته ورودی، رشته را کلمه به کلمه معکوس کنید، اولین کلمه آخرین کلمه خواهد بود و غیره.

function reverseWords(string) {
	let createArray = string.split(' ')
	let createreversedArray = createArray.reverse()
    return createreversedArray.join(' ')
}

console.log(reverseWords("a good example"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function firstRepeat(chars) {

    let  newArr = []

	for (let index = 0; index < chars.length; index++) {
        
        
        
        if(!newArr.includes(chars[index])){

            newArr.push(chars[index])
        }else{
            return chars[index]
        }
        
    }
    
    if(newArr.length === chars.length){
        return '-1'
    }
}


console.log(firstRepeat("legolas"));

////////////////////////////////////////////////////////////////////////////////////////////////////////