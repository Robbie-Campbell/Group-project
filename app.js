const button = document.querySelector(".click_me");
const text = document.querySelector(".hello")

button.addEventListener("click", ()=>{
    text.textContent = "Welcome to the repo bois";
    text.classList.add("stylish");
})