const input = document.querySelector(`#validation-input`);

const onBlur = (event) => {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        event.currentTarget.classList.add(`valid`);
        event.currentTarget.classList.remove(`invalid`);
    } else {
        event.currentTarget.classList.add(`invalid`);
        event.currentTarget.classList.remove(`valid`);
    }
}

input.addEventListener(`blur`, onBlur)