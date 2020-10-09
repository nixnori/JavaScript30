const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const setDate = () => {
    const now = new Date();

    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90;

    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    console.log(seconds);
}

setInterval(setDate, 1000);