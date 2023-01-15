const inputControlBtnEl = document.querySelector('#font-size-control');
const textSizeEl = document.querySelector('#text')

inputControlBtnEl.addEventListener('input', newTextSizeEl)

function newTextSizeEl() {{
    textSizeEl.style.fontSize = inputControlBtnEl.value + 'px'
}}



