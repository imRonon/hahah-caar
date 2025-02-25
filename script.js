// let sth = 4

// while (sth <= 44) {
//     console.log(sth)
//     sth++
// }
// let a = 0
// while (a >= -11) {
//     console.log(a)
//     a--
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// let a = 0

// for (let i = 0; i <= 30; i += 2) {
//     a += i
// }
// console.log(a)

// console.log("NEXT EXAMPLE!!!")

// for(let u = 3; u <= 33; u += 2) {
//     console.log(u)
// }

// let maas = [2,222,"hello", false,7,11,85,"hel",23,55,66,77,88,99,100]

// if(typeof i === 'number') {
//     console.log(i)
// }
// }
// let corpus = document.querySelector(".corpus")
// let wheel = document.querySelector(".wheel")
// let other = document.querySelector(".other")
// let windows = document.querySelector(".windows")
// let goUp = () => {
// corpus.style.transform="translateY(-100px)"
// wheel.style.top="180px"
// other.style.top="180px"
// windows.style.transform="translateY(-100px)"
// }

let realCar = document.querySelector(".real-car");
let roadAnimation = document.querySelectorAll(".road-lines, .another");
let wheelAnimation = document.querySelectorAll(".wheel, .other");
let startAnimation = document.querySelector(".invisible");
let stopAnimation = document.querySelector(".stop");

let left = () => {
    realCar.style.transform += "translateY(-10px)";
};
let right = () => {
    realCar.style.transform += "translateY(10px)";
};
let back = () => {
    realCar.style.transform += "translateX(-20px)";
};
let forward = () => {
    realCar.style.transform += "translateX(20px)";
};
let stop = () => {
    for (let i of roadAnimation) {
        i.style.display = "none";
    }
    for (let u of wheelAnimation) {
        u.style.animation = "none";
    }
    startAnimation.style.display = "block";
    startAnimation.style.zIndex = "3";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
};
let start = () => {
    for (let i of roadAnimation) {
        i.style.display = "block";
        i.style.animation = "move 1s linear infinite";
    }
    for (let u of wheelAnimation) {
        u.style.animation = "wheeel 0.5s linear infinite";
    }
    stopAnimation.style.display = "block";
    startAnimation.style.zIndex = "-4";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
};
let btn1 = document.querySelector("#left");
let btn2 = document.querySelector("#right");
let btn3 = document.querySelector("#back");
let btn4 = document.querySelector("#forward");
let btn5 = document.querySelector("#enter");
let btn6 = document.querySelector("#enter2");

document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        btn1.click = left();
    } else if (event.key === "s") {
        btn2.click = right();
    } else if (event.key === "a") {
        btn3.click = back();
    } else if (event.key === "d") {
        btn4.click = forward();
    } else if (event.key === "Enter") {
        btn5.click = start();
    } else if (event.key === "Backspace") {
        btn6.click = stop();
    }
});
