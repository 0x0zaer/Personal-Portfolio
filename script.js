let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navBar");
let now = document.querySelector("#now");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}

const tiMe = () => {
    const nowT = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[nowT.getDay()];
    const time = nowT.toLocaleTimeString();
    now.innerText = `${dayName}, ${time}`;
}

tiMe(); 
