const button = document.querySelector(".click_me");
const text = document.querySelector(".hello")

button.addEventListener("click", ()=>{
    text.textContent = "Fuck you lol";
    text.classList.add("stylish");
})