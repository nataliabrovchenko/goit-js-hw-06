const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

const onSlide = (event) => {
    text.style.fontSize = String(event.currentTarget.value) + `px`;
}

input.addEventListener(`input`, onSlide);