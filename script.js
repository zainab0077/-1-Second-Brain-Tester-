document.getElementById("start-btn").addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 2);
    let message = randomNum === 0 ? "You Win! 🎉" : "You Lose! 😆";
    document.getElementById("message").innerText = message;
});
