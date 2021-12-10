
// let ans=Math.floor(Math.random()*100+1);
// let count= 1;
// document.getElementById("check").onclick = function(){
//     let numb=document.getElementById("number").value;
//     if (numb == ans)
//     {
        
//         window.alert(`You have guessed the number correctly!!It took you ${count} tries`)
//     }
//     else{
//         if(numb>ans)
//         {   count++;
//             window.alert(`Incorrect number.Try smaller number`)
            
//         }
//         else
//         {   count++;
//             window.alert(`Incorrect number.Try larger number`)
            
//         }

//     }
// }
// create a function sum
// create a function mul
// create a function calculate which should take call back function and display output in console


// create a function  make uppercase use inbuilt function toUppercase()
// create another function to reverse string function
// create a function handler name take name from user using call back function
// display the 
//  let capital = (name) =>{
//      return name.toUpperCase();
//  }
//  let reversestr= (name) =>{
//      let splitstr=name.split("")
// let rev=splitstr.reverse();
// let reversename=rev.join("")
// return reversename;
//  }
// function handler(name,callback){
//     console.log(callback(name));
// }

// handler("pooja",capital);
// handler("pooja",reversestr);

// create a function map which takes 2 inputs
// an array of function []10 20 30 40 50]
// a call back function =?
// a function should applied to each element of the array inside map 
// map should return new array filled with number using callback function on each element
// console.log(typeof(1));
// console.log(typeof(1.1));
// console.log(typeof('1.1'));
// console.log(typeof(true));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof([]));
// console.log(typeof({}));
// console.log(typeof(NaN));
// __________________________________________________________________________________________________________
// odd numbers
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let oddnum = function(num){
//     console.log("The odd numbers in the array are")
//     for(i in num){
//         if(num[i]%2!==0)
//         console.log(`${num[i]}`)
//     }
// }
// oddnum(arr);
// let arr=[1,2,3,4,5,6,7,8,9,10];
// (function()
// {
//     console.log("The odd numbers in the array are")
//     for(i in arr)
//     {
//         if(arr[i]%2!==0)
//         console.log(`${arr[i]}`)
//     }
// })(arr);
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let oddnum = (num) => {
//      console.log("The odd numbers in the array are")
//     for(i in num)
//     {
//         if(num[i]%2!==0)
//         console.log(`${num[i]}`)
//     }

// }
// oddnum(arr);
// // _______________________________________________________________________________________________________
// Uppercase
// let str="pooja";
// let capitalstr = function(a){
//     console.log(`The upper case of the string is ${a.toUpperCase()}`)
// }
// capitalstr(str);
// let str="pooja";
// (function(a){
//     console.log(`The upper case of the string is ${a.toUpperCase()}`)
// })(str);
// let str="pooja"
// let capitalstr = (a) => console.log(`The upper case of the string is ${a.toUpperCase()}`)
// capitalstr(str);
// _______________________________________________________________________________________________________
// sum of all numbers in an array
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// let add = function(num)
// {   for(i in num)
//     {
//         sum=sum+num[i]
//     }
//   console.log(`The sum of numbers in the array ${sum}`)
// }
// add(arr);
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// (function(num)
// { 
//     for(i in num)
//      {
//          sum=sum+num[i]
//      }
//   console.log(`Sum of numbers in the array ${sum}`)
// })(arr);
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// let add= (num) => {
//     for(i in num)
//       {
//           sum=sum+num[i];
//       }
//   console.log(` The sum of numbers in the array ${sum}`)
// }
// add(arr);
// _______________________________________________________________________________________________________________
// palindrome
// let str1="madam"
// let str2="pooja"
// let palindrome= function(arr)
// {    const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// }
// palindrome(str1);
// palindrome(str2);
// (function(arr)
// {
//     const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// })("madam");
// let str1="madam"
// let str2="pooja"
// let palindrome= (arr) =>
// {    const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// }
// palindrome(str1);
// palindrome(str2);
// _________________________________________________________________
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         const data =["Apple","Banana","Grapes","Mangoes"]
//         if(data.length == 4)
//         {
//             resolve(data);
//         }
//         else 
//         reject("Spmething went wrong")
        


//     },3000)
// })
// console.log(promise);
// promise.then(result) => 
// https://docs.google.com/document/d/1K6jW6TPmqWvzoRAm2t-GlOAxKmMRsLt5zaCsdcH_3LM/edit
// https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json
// https://github.com/public-apis/public-apis
// const square = async function(x){
//     return x*x;
// }
// const data = await square(10);
// console.log(data)

// const url ="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" ;
// // fetch(url).then((response)=> response.json()).then((data)=>console.log(data)).catch((error)=> console.log(error));
// const fetchdata = async ()=>
// {
//     try
//     { 
//     const response = await fetch(url);
//     const countries =await response.json();
//     console.log(countries);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// };
// fetchdata();
// let btn = document.querySelector("#btn");
// let pic = document.querySelector("#photo");
// btn.addEventListener("click",function(){
//     fetch("https://dog.ceo/api/breeds/image/random").then(handleFetchError)
//     .then(res => res.json())
//     .then(data => {pic.src=data.message;})
//     .catch((err)=>console.log(err))});
// const handleFetchError = (request) =>{
//     if(!request.ok)
//     {
//         throw Error(request.status);
//     }
//     return request;
// }
// const url = "https://api.covid19api.com/summary"
// const fetchdata = async() =>
// {
//     try 
//     {
//         const response = await fetch(url);
//         const data = await response.json();
//          let  ans = data.filter(obj => obj.Country == "India");
//         console.log(ans)
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
// }
// fetchdata();

// fetch("https://api.covid19api.com/summary")
//   .then((apidata) => {
//     // console.log(apidata);
//     return apidata.json();  
//   })
//   .then((actualdata) => {
//     // console.log(actualdata);
//     // console.log(actualdata.Countries[76]);
//     // console.log(actualdata.Countries[76].Country);
//     // console.log(actualdata.Countries[76].TotalConfirmed);
//     // console.log(actualdata.Countries[76].TotalDeaths);
//     // console.log(actualdata.Countries[76].TotalRecovered);
//     // document.getElementById("apiindia").innerHTML =
//     //   actualdata.Countries[76].Country;

//     const realdata = actualdata.Countries[76];
//     document.getElementById("apiindia").innerHTML = `Country Name: ${realdata.Country}
//     <br>Total Confirmed: ${realdata.TotalConfirmed}
//     <br>Total Deaths: ${realdata.TotalDeaths}
//     <br>Total Recovered: ${realdata.TotalRecovered}`;
//   });
// let btn = document.querySelector("#btn");
// fetch("https://breakingbadapi.com/api/quote/random").then((apidata)=>{
//   return apidata.json();
// }).then((actualdata)=>{
//     btn.addEventListener("click", function(){
//         console.log(actualdata)
//         document.getElementById("apiseries").innerHTML =`
//         Quote : ${actualdata[0].quote}
//         <br>Author: ${actualdata[0].author}`
//     })
// }).catch((err)=>console.log(err))

// https://api.github.com/users/
// https://api.giphy.com/v1/gifs/search?api_key=Cc0cDk9PZZMUNjMgvr0MssB098TJR3kN&limit=25&offset=0&rating=g&lang=en&q=
// https://aws.random.cat/meow
// https://random.dog/woof.json
// <!-- <div class="container">
//       <h2>Getting Random images of dog</h2>
//       <img id="photo" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/international_dog_day_2021_4_r_1200x768.jpeg?mhENil.rEsB2Wju30UDroUYKmJ4NfkX4&size=770:433" alt="dogimage"/>
//       <button id="btn">Get the New Image</button>
//     </div> -->
// function display1(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "1";
//         callback();
//     },1000);
// }
// function display2(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "2";
//         callback();
//     },1000);
// }
// function display3(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "3";
//         callback();
//     },1000);
// }
// function display4(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "4";
//         callback();
//     },1000);
// }
// function display5(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "5";
//         callback();
//     },1000);
// }
// function display6(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "6";
//         callback();
//     },1000);
// }
// function display7(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "7";
//         callback();
//     },1000);
// }
// function display8(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "8";
//         callback();
//     },1000);
// }
// function display9(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "9";
//         callback();
//     },1000);
// }
// function display10(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "10";
//         callback();
//     },1000);
// }
// document.getElementById("btn").addEventListener("click",function()
// {
//     display10(()=>
//     {
//         display9(()=>
//         {
//             display8(()=>
//             {
//                   display7(()=>
//                     {
//                         display6(()=>
//                         {
//                             display5(()=>
//                             {
//                                 display4(()=>
//                                 {
//                                     display3(()=>
//                                     {
//                                         display2(()=>
//                                         {
//                                             display1(()=>
//                                             {
//                                                 setTimeout(()=> 
//                                                 {
//                                                     document.getElementById("countdown").innerHTML="HAPPY INDEPENDENCE DAY";
//                                                 },1000);
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
                
//             })
//         })
//     })


// })


// let url ="https://619dc713131c60001708907d.mockapi.io/user"
// function getData(){
//     fetch(url)
// .then((result)=>result.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));
// }
// function createData()
// {
//     let data={
//         name:"Pooja",
//         email:"pooja@gmail.com"
//     };
//     fetch(url,
//   {
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:
//     {
//         "Content-type": "application/json; charset=UTF-8",
//     }
//   }).then((result)=>result.json())
//   .then((data)=>console.log(data))
//   .catch((error)=> console.log(error))
// }
// createData();
// getData();

// function updateData(){
//     let data={
//         name:"Vijay George",
//         email:"george@gmail.com",
//     };
//     fetch(url + "/1",{
//         method:"PUT",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     }).then((result)=>result.json())
//     .then((data)=>console.log(data))
//     .catch((error)=> console.log(error))
// }
// updateData();

// function deleteData()
// {    
//     fetch(url + "/12",
//         {
//           method:"DELETE",
//           body:JSON.stringify(data),
//           headers:
//           {
//               "Content-type": "application/json; charset=UTF-8",
//           }
//         }).then((result)=>result.json())
//         .then((data)=>console.log(data))
//         .catch((error)=> console.log(error))
// }
// deleteData();

// function renderToy(toy) {
//     const toyDiv = document.createElement("div");
//     toyDiv.className = "card";
//     toyDiv.innerHTML = `
//       <h2>${toy.name}</h2>
//       <img src="${toy.image}" class="toy-avatar" />
//       <p>${toy.likes} Likes</p>
//       <button data-id='${toy.id}' class="like-btn">Like <3</button>
//       <button data-id='${toy.id}' class="delete-btn">Delete</button>
//       `;

//     toyCollection.appendChild(toyDiv);
//   }




//  function show(data)
//  {  
//     //  const prdtdiv = document.createElement("div");
//     //  prdtdiv.className="card";
//     for(i in data)
//     {
//      document.getElementById("display").innerHTML=`
//      <img src="${data[i].image_link}" alt="img">
//      <p>${data[i].brand}</p>
//      <p>${data[i].name}</p>
//      <p>${data[i].price} ${data[0].price_sign}</p>
//      <p>${data[i].product_link}</p>
//      <p>${data[i].description}</p>`; 
//     }
//  }



// let url="http://makeup-api.herokuapp.com/api/v1/products.json";
// fetchdata(url);
// async function fetchdata(url)
// {
//     try 
//     {
//         const response = await fetch(url);
//         const datas = await response.json();
//         datas.forEach(data =>show(data));
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// const displayfun=document.getElementById("display")
// function show(data) {
//     const displayDiv = document.createElement("div");
//     displayDiv.className = "card";
//     displayDiv.innerHTML = `
//       <img src="${data.image_link}" alt="img" id="image">
//          <h6>Brand: ${data.brand}</h6>
//          <h6> Name: ${data.name}</h6>
//          <h6>Price:${data.price}${data.price_sign}</h6>
//          <h6> Product Link: <a href="${data.product_link}" target="_blank">${data.product_link}</a></h6>`;
//     displayfun.appendChild(displayDiv);
//   }

  
// let arr=[1,2,5,1,7,5,9,3,4,7,5,];
// let uniqarr= function(arr)
// {
//      ans=[... new Set(arr)]
//      console.log(`The unique array is ${ans}`);
// }
// uniqarr(arr);

  
// (function(arr)
// {
//      ans=[... new Set(arr)]
//      console.log(`The unique array is ${ans}`);
// })(arr);

// let uniqarr= (arr) =>
// {
//      ans=[... new Set(arr)]
//      console.log(`The unique array is ${ans}`);
// }
// uniqarr(arr);

// let arr1=[1,12,15,26,38];
// let arr2=[13,17,30,45,2];
// let median = function(arr1,arr2)
// {
//     let unsorted_arr=arr1.concat(arr2);
//     let sorted_arr=unsorted_arr.sort(function(a,b){return a-b});
//     let len=sorted_arr.length;
//     let sum= sorted_arr[parseInt((len-1)/2)] + sorted_arr[parseInt((len)/2)];
//     let ans=sum/2;
//     console.log(`Median of the two arrays is ${ans}`);
// }
// median(arr1,arr2);

// (function(arr1,arr2)
// {
//     let unsorted_arr=arr1.concat(arr2);
//     let sorted_arr=unsorted_arr.sort(function(a,b){return a-b});
//     let len=sorted_arr.length;
//     let sum= sorted_arr[parseInt((len-1)/2)] + sorted_arr[parseInt((len)/2)];
//     let ans=sum/2;
//     console.log(`Median of the two arrays is ${ans}`);
// })(arr1,arr2) 

// let median = (arr1,arr2) =>  
// {
//     let unsorted_arr=arr1.concat(arr2);
//     let sorted_arr=unsorted_arr.sort(function(a,b){return a-b});
//     let len=sorted_arr.length;
//     let sum= sorted_arr[parseInt((len-1)/2)] + sorted_arr[parseInt((len)/2)];
//     let ans=sum/2;
//     console.log(`Median of the two arrays is ${ans}`);
// }
// median(arr1,arr2);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let prime_num = function(num)
// {   let ans=[];
//     for(i in num)
//     {   if(num[i] == 1)
//           continue;
//         else
//         if(num[i]==2)
//         {
//             for(let j=2;j<num[i];j++)
//            {
//               if(num[i]%j == 0)
//                break;
//                else
//                  {
//                      ans.push(num[i]);
//                      break;
//                  }

//             } 
//         }
//     }
//     console.log(`The Prime numbers in the array are ${ans}`)
// }

// prime_num(arr);

// let a = [1,2,3,4,5,6,7,8,9,10]
// let prime = [];

// let prime_num = (num) => {
//     if(num == 1)
//       return false;
//     if(num == 2)
//     return true;
//       for (let j = 2; j <= num/2; j++) 
//       {
//        if ((num % j) == 0) 
//        { 
//         return false;
//        } 
//      }
//      return true;
// }
// for (i in a) {
//   if (prime_num(a[i])) {
//       prime.push(a[i])
//   }
// }

// console.log(`The prime numbers in the array are ${prime}`);

// let a = [1,2,3,4,5,6,7,8,9,10,];
// (function(a) {
//     let prime = [];
//     for(i in a)
//     {
//         if(a[i] == 1)
//          continue;
//         else if(a[i] == 2)
//            prime.push(a[i]);
//           else
//            { 
//                for (let j = 2; j<a[i]; j++) 
//                  {
//                      if ((a[i] % j) == 0)
//                         { 
//                             break;
//                         } 
//                       else
//                       if(a[i]% 9 !== 0)
//                       {
//                         prime.push(a[i]);
//                         break;
//                       }
                        
//                   }=
//            }
        
//     }
//     console.log(`The prime numbers in the array are ${prime}`);
// })(a)


// let arr=[1,2,3,4,5];
// let rotate = function(num,k)
// {   
//     for(let i=1;i<=k;i++)
//     {  
//         num.unshift(num.pop());        
//     }
//      console.log(`The rotated array is ${num}`)
// }

// rotate(arr,3);


// (function(num,k)
// {   
//     for(let i=1;i<=k;i++)
//     {  
//         num.unshift(num.pop());        
//     }
//      console.log(`The rotated array is ${num}`)
// })(arr,3)
 

// var obj = [
//     { person: "Name 1", age: "2", company: "GUVI" },
//     { person: "Name 2", age: "5", company: "GUVI geek" },
//     { person: "Name 3", age: "8", company: "GUVI geek network" },
//   ];

//   for(let i=0;i<obj.length;i++)
//   {
//       console.log(`Person: ${obj[i].person}`)
//       console.log(`Age: ${obj[i].age}`)
//       console.log(`Company: ${obj[i].company}`)
//   }

//   for(i in obj)
//   {
//       console.log(`Person: ${obj[i].person}`)
//       console.log(`Age: ${obj[i].age}`)
//       console.log(`Company: ${obj[i].company}`)
//   }

// Object.entries(obj).forEach(entry => {
//     const [key, value] = entry;
//     console.log(key, value);
//   });

// for (const [key, value] of Object.entries(obj)) 
// {
//     console.log(key,value)
// }

// let resume ={
//     Name: "Pooja",
//     Email: "poojarajuthamarai@gmail.com",
//     Education:[
//         {
//             year:"2013-2017",
//             institute:"St.Jospeh Institute Of Technology",
//             specialization:"BE.EEE",
//             percentage:"80%"
//         },
//         {
//             year:"2012-2013",
//             institute:"Holy Prince Matriculation Higher Secondary School",
//             specialization:"HSC",
//             percentage:"94.2%"
//         },
//         {
//             year:"2012-2013",
//             institute:"Holy Prince Matriculation Higher Secondary School",
//             specialization:"SSLC",
//             percentage:"95.8%"
//         }
//     ],
//     management_skills:["National Level technical symposium Organizer","Member and organizer in Quiz and Math club "],
//     communication_skills:"BEC Vantage Certified",
//     coding_skills:["C","C++","Basics of Java"],
//     hobbies:["Reading Books","Playing Badminton","Solving Sudoku"]
// }

// console.log(resume)


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
//     for(i in t)
//     {
//         console.log(`Name:${t[i].name}`)
//         console.log(`${t[i].flag}`)
//     }
//   } else {
//     console.log("Data is not available");
//   }
// };
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
//     let ans = t.filter(obj => obj.region === "Asia")
//     console.log(`The countries in Asia Region are: ${ans.map(x=>x.name)}`)
//   } else {
//     console.log("Data is not available");
//   }
// };

// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
//     let ans = t.filter(obj => obj.population <=200000)
//      console.log(`The countries with population less than two lakh are ${ans.map(x=>x.name)}`)
//   } else {
//     console.log("Data is not available");
//   }
// };

// xhr.send();

       
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
//     t.forEach(element =>
//       {
//       console.log(`Name: ${element.name}`)
//       console.log(`Capital: ${element.capital}`)
//       console.log(`Flag: ${element.flag}`)
//     })
//   } else {
//     console.log("Data is not available");
//   }
// };

// xhr.send();


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
    
//     let ans = t.reduce(function(sum,item)
//     {
//       return sum+item.population;
//     },0)
//     console.log(`The sum of population of all countries are ${ans}`)
//   } else {
//     console.log("Data is not available");
//   }
// };

// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v2/all");
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var t = JSON.parse(this.response);
//     let ans = t.filter(obj => obj.currencies.symbol =="$")
//      console.log(`The countries with US dollar as currency are ${ans.map(x=>x.name)}`)
//   } else {
//     console.log("Data is not available");
//   }
// };

// xhr.send();



// class Movie{
//   constructor(title,studio,rating="PG")
//   {
//     this.title=title;
//     this.studio=studio;
//     this.rating=rating;
//   }
//   getPG()
//   {

//   }
// } 

// let a=[1,2]
// let b=[...a];
// let c=[1,2];
// b.push(10);
// c.push(20);
// console.log(a,b,c);

// const c1=3;
// const c2="3";
// console.log(  c1==c2);
// console.log(c1===c2)

// const [u1,u2,u3=10]=[5,6,null]

// console.log(u1,u2,u3)

//  let double= (b)=> [b,b*2];


// const [h1,h2]= double(5);
// console.log(h1,h2);
// console.log(typeof(h1),typeof(h2))


// const nums=[10,20,40];
// console.log(nums.map(item =>item*2))


// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]

// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];

// Task 4
// Find the Average marks

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"

// Only use
// map, reduce, filter & destructuring

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy

// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt"
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter"
//   },
//   {
//     marks: 21,
//     name: "Pate Collier"
//   },
//   {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge"
//   }
// ];

// let t1=scores.map(obj=>obj.name)
// console.log(t1);

// let t2=scores.filter(obj => obj.marks >= 40 )
// console.log(t2);

// let t3=scores.filter(obj=>obj.marks<=40).map(obj=>obj.name)
// console.log(t3);

// let avg = (scores.map(obj=>obj.marks).reduce((a,b)=> a+b,0))/scores.length
// console.log(avg)

// let t5=scores.map(obj=>obj.marks).reduce(function(a, b){
//   return Math.max(a,b)}, 0)
//   let ans=scores.filter(obj=>obj.marks==t5).map(obj=>obj.name)
// console.log(ans);

// let arr=[1,2,3];
// let without=(num,...x) => num.filter(item=> !x.includes(item) );
//  console.log(without(arr,1,2))
// const [name,age]=[15,"pooja"]
// console.log(name,age);

// function fullname(obj){
//     return `Welcome ${obj.lastname} ${obj.firstname} 😍!!!`
// }

// console.log(fullname({firstname:"Naga",lastname:"Swarup"}))

// let arr=[1,11,12,20,2,4,45,56]
// let groupby=function(num){
//     let ans = arr.sort();
//     return ans;
// }

// console.log(groupby(arr));


// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt"
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter"
//   },
//   {
//     marks: 21,
//     name: "Pate Collier"
//   },
//   {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge"
//   }
// ];

// console.log(scores.filter(obj=>obj.marks<40).map(obj=>obj.name));
// console.log(scores.filter(({marks})=> marks<40).map(({name})=>name));



// let avg = (scores.reduce((sum,{marks}) => sum+marks,0))/scores.length
// console.log(avg);


let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ]

//   countriesInfo.forEach(data =>
//     {
//                document.body.innerHTML = `
//                <img src="${data.flag}" alt="img" id="image">
//                  <h4>Name: ${data.name}</h4>
//                  <h6>Population: ${data.population}</h6>
//                  <h6>Region: ${data.region}</h6>
//                  <h6>Capital: ${data.capital}</h6>`;
//     })

//  display=document.getElementById("display")
//   function show(countriesInfo) {
//     const displayDiv = document.createElement("div");
//     displayDiv.className = "card";
//     displayDiv.innerHTML = `
//       <img src="${countriesInfo.flag}" alt="img" id="image">
//          <h4>Name: ${countriesInfo.name}</h4>
//          <h6>Population: ${countriesInfo.population}</h6>
//          <h6>Region: ${countriesInfo.region}</h6>
//          <h6>Capital: ${countriesInfo.capital}</h6>`;
//     display.appendChild(displayDiv);
//   }

// show(countriesInfo.map());
//  function show(data)
//  {  
//     //  const prdtdiv = document.createElement("div");
//     //  prdtdiv.className="card";
//     for(i in data)
//     {
//      document.getElementById("display").innerHTML=`
//      <img src="${data[i].image_link}" alt="img">
//      <p>${data[i].brand}</p>
//      <p>${data[i].name}</p>
//      <p>${data[i].price} ${data[0].price_sign}</p>
//      <p>${data[i].product_link}</p>
//      <p>${data[i].description}</p>`; 
//     }
//  }



// countriesInfo.forEach(data=>display(data))
//  function display(data) 
// {       const dis_div = document.createElement("div");
//         dis_div.className="card";
//         document.getElementsById("display").innerHTML=`
//         <img src="${data.flag}" alt="img" id="image">
//         <h4>${data.name}</h4>
//         <h6>Population: ${data.population}</h6>
//         <h6>Region: ${data.region}</h6>
//         <h6>Capital: ${data.capital}</h6>`

// }
       
//    document.body.innerHTML=`
//      <img src="${data.flag}" alt="img" id="image">
//      <h4>${data.name}</h4>
//      <h6>Population: ${data.population}</h6>
//      <h6>Region: ${data.region}</h6>
//      <h6>Capital: ${data.capital}</h6>`)

// let url="http://makeup-api.herokuapp.com/api/v1/products.json";
// fetchdata(url);'
// displayall(countriesInfo);
// async function displayall(datas)
// {
//     try 
//     {
        countriesInfo.forEach(data =>show(data));
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

function show(data) 
{   const displayfun=document.getElementById("display")
    const displayDiv = document.createElement("div");
    displayDiv.className = "card";
    displayDiv.innerHTML = `
         <img src="${data.flag}" alt="img" id="image">
         <h4>${data.name}</h4>
         <p><span>Population:</span> ${data.population}</p>
         <p><span>Region:</span> ${data.region}</p>
         <p><span>Capital:</span> ${data.capital}</p>`
    displayfun.appendChild(displayDiv);
  }