'use strict';

const wrapper = document.querySelector('.wrapper');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
let val = 1

async function fetchdata(url){
    try {
        const res = await fetch(url);
        let result = await res.json();
        showData(result);
        // console.log(result);
    }catch(er){
        console.log(er);
        // throw new Error('there is some error');
    }
}
fetchdata('https://rickandmortyapi.com/api/character')

// const fetchdata = new Promise(function(resolve , reject){
//     let url = 'https://rickandmortyapi.com/api/character';
//     return fetch(url).then(res => {
//         if(res.ok){
//             res.json().then(obj => showData(obj))         
//         }else{
//             reject(new Error('error from fetch') )
//         }
//     })
// })

// function fetchdata(url) {
//     return new Promise(function (resolve, reject) {
//         // let url = ;
//         return fetch(url).then(res => {
//             if (res.ok) {
//                 res.json().then(obj => showData(obj))
//             } else {
//                 reject(new Error('error from fetch'))
//             }
//         })
//     })
// }

// const fetchdata = (url = 'https://rickandmortyapi.com/api/character?page=1') => {
//     let promisedata =  new Promise(async (resolve , reject) => {
//         try {
//             const response = await fetch(url)
//             let data = await response.json()
//             resolve(data)
//         } catch (error) {
//             reject(error);       
//         }
//     })
//     console.log(promisedata.then(data =>  console.log(data)));
//     // let final = await promisedata.json();
// }


// fetchdata();
// const datafinal = await fetchdata();


// console.log(datafinal.json());




// fetchdata.then((response) => console.log(response.json()))


function showData({info,results}) {
    for (const obj of results) {
        let {id,name,gender,image,episode,location} = obj
        let CardHTML = `<div class="card card${id}">
            <div class="img">
                <img src="${image}" alt="">
            </div>
            <div class="content">
                <h2 class="tittle">${name}</h2>
                <p class="gender">Gender : <span>${gender}</span></p>
                <p class="location">location : <span>${location.name}</span></p>
                <p class="totalepisode">Total Episode : <span>${episode.length}</span></p>
            </div>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', CardHTML);
    }
}

next.addEventListener('click', () => {
    wrapper.innerHTML = ''
    fetchdata(`https://rickandmortyapi.com/api/character/?page=${++val}`)

})

pre.addEventListener('click', () => {
    --val
    wrapper.innerHTML = ''
    if (val) {
        fetchdata(`https://rickandmortyapi.com/api/character/?page=${val}`)
    } else {
        wrapper.innerHTML = 'no more previous page'
    }
})