// let container = document.querySelector('#prosteId');

// for (let i = 0; i < 10; i++) {
//     let div = document.createElement('div');
//     let button = document.createElement('button');
//     button.textContent = `${i+1} button`;
//     div.appendChild(button);
//     container.appendChild(div)
// }

// console.log(container.dataset.name)

// container.style.cssText = 'height: 250px; width: 250px; background: red; padding: 10px;';

// container.setAttribute('style', 'border: 1px solid black; text-align:center');

// container.style.textAlign = 'center';

// console.log(window.getComputedStyle(container));


//zrób tęcze ;)






// function Rainbow(h, l,rainbowDiv,rainbowContainer) {

//     this.h = h;
//     this.l = l;
//     this.rainbowDiv = rainbowDiv;
//     this.rainbowContainer = rainbowContainer;

//     this.darkRainbow = function () {
//         this.l -= 10;
//         for (let i = 0; i < rainbowDiv.length; i++) {
//             rainbowDiv[i].style.cssText = `height: 10px; width: 50px; background: hsl(${h/i},100%,${l}%);`
//         }
//     }


//     this.addRainbow = function () {

//         let rainbowContainer = document.createElement('div');
//         document.body.appendChild(rainbowContainer);

//         for (let i = 0; i < 10; i++) {
//             let rainbowDiv = document.createElement('div');
//             rainbowDiv.classList.add('rainbow');
//             rainbowDiv.style.cssText = `height: 10px; width: 50px; background: hsl(${h/i},100%,${l}%);`
//             rainbowContainer.appendChild(rainbowDiv);
//         }

//         let eventButton = document.createElement('button');
//         eventButton.textContent = 'kliknij';
//         document.body.appendChild(eventButton);
//         eventButton.addEventListener('click', this.darkRainbow)
//         rainbowContainer.appendChild(eventButton);

//     }
// }


// let addRainbowButton = document.createElement('button');
// addRainbowButton.textContent = 'dodaje tęcze';
// document.body.appendChild(addRainbowButton);

// function createNewReainbow() {
//     tecza = new Rainbow(360, 50,document.createElement('div'),document.createElement('div'));
//     tecza.addRainbow();
// }

// addRainbowButton.addEventListener('click', createNewReainbow);

let div = document.createElement('div');
document.body.appendChild(div);

function losowaLiczba(){
    return Math.floor(Math.random()*255)
}

let intervalIndex = setInterval(function () {
    div.style.cssText= `background: rgb(${losowaLiczba()},${losowaLiczba()},${losowaLiczba()});`
    console.log(losowaLiczba());
    
}, 5000)


document.querySelector('section li:first-child').style.color='red';

document.querySelector('section li:nth-child(3)').style.color='red';

document.querySelector('section li:last-child').style.color='red';