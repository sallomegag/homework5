"use strict";

// 1
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let allarr = arr1.concat(arr2,arr3);
console.log(allarr);

// 2
let arr = [-1, -2, -3, 4].some(item => item >0);

console.log(arr);

// 3

let array =[23,45,32,5,87,7,3,98].sort((x,y) => y-x)[7];
console.log(array);

// 4


let newDivElement = document.createElement('div');
newDivElement.setAttribute('class', 'wraper');

let imgNewelement = document.createElement('img');
imgNewelement.setAttribute('src', 'https://images.ctfassets.net/23aumh6u8s0i/2QjNmyDo6LfK4HC8F1q4qw/b8baddde46d79ec9432a15f14b4a41a2/javascript');
imgNewelement.setAttribute('alt', 'image');

let titlenewElement = document.createElement('h2');
titlenewElement.innerText = 'Image Title';
titlenewElement.style.color = 'red';
titlenewElement.style.fontSize = '30px';

newDivElement.appendChild(imgNewelement);
newDivElement.appendChild(titlenewElement);

document.getElementById('container').appendChild(newDivElement);

