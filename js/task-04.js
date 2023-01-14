const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValueEl = {
  value: 0,
};

decrementBtn.addEventListener("click", () => {
  counterValueEl.value -= 1;
  valueEl.textContent = counterValueEl.value;
});

incrementBtn.addEventListener("click", () => {
  counterValueEl.value += 1;
  valueEl.textContent = counterValueEl.value;
});

decrementBtn.style.backgroundColor = "aquamarine";
decrementBtn.style.color = "teal";
incrementBtn.style.backgroundColor = "aquamarine";
incrementBtn.style.color = "teal";

decrementBtn.style.width = "200px";
decrementBtn.style.height = "50px";
decrementBtn.style.fontSize = "30px";
incrementBtn.style.width = "200px";
incrementBtn.style.height = "50px";
incrementBtn.style.fontSize = "30px";

decrementBtn.style.border = "none";
decrementBtn.style.borderRadius = "5px";
incrementBtn.style.border = "none";
incrementBtn.style.borderRadius = "5px";

valueEl.style.fontSize = "30px";
