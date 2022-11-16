'use strict';

const wrapper = document.querySelector('.wrapper');
const timerDiv = document.querySelector('.timer');
const lights = document.querySelectorAll('.light');
let counter = 0;


const changestyle = (cdiv, color, time) => {
    let close = setInterval(() => {
        cdiv.style.color = color
        cdiv.style.backgroundColor = color
        if (time > 0) {
            timerDiv.innerHTML = `${time--}s`

        } else {
            clearInterval(close)

            lights.forEach(el => {
                el.classList.remove('active')
                el.style.color = ''
                el.style.backgroundColor = ''
            })
           
            ++a;
            
            if (a < 3 && flag == 0 && reset == 0) {
                counter++;
                callnext(a)
                if (counter == 2) {
                    flag = 1; 
                }
            }else if (flag == 1 && reset == 0){
                if (flag==1) {
                    callnext(a = 1)
                    reset = 1
                }
                flag = 0
                counter = 0
            }else{
                reset = 0
                callnext(a = 0)
            }
        }
    }, 1000);
}

const callnext = (a = 0) => {
    lights[a].classList.add('active');

    let trafficLightActive = document.querySelector('.trafficLight .active');
    let colorActive = trafficLightActive.attributes['data-color'].value
    let timeActive = parseInt(trafficLightActive.attributes['data-time'].value)

    changestyle(trafficLightActive, colorActive, timeActive)
}

let reset = 0;
let flag = 0;
let a = 0;
callnext(a)





