const form = document.querySelector(`.login-form`);

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === `` || password.value === ``) {
        return console.log(`Будь ласка, заповніть усі поля!`);
    }

    const elements = {};
    elements.email = email.value;
    elements.password = password.value;
    console.log(elements);
    event.currentTarget.reset();
}

form.addEventListener(`submit`, handleSubmit);