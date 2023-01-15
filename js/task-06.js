const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const valueNumber = Number(event.currentTarget.value.length);
    const validationNumber = Number(validationInputEl.dataset.length);

    if (valueNumber === validationNumber) {
        validationInputEl.classList.add('valid')
        validationInputEl.classList.remove('invalid')
    } else {
        validationInputEl.classList.add("invalid");
        validationInputEl.classList.remove("valid");
    }
    
}