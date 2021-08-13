const load_text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
// time interval
let int = setInterval(blurring, 30);

let load = 0;
function blurring() {
    load++;

    if(load > 99){
        clearInterval(int)
    } 
    load_text.innerText = `${load}%`;
    load_text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale (load, 0, 100, 30, 0)}px)`;
}
// Using scale for blur effect and opacity from stack overflow (link below)
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers