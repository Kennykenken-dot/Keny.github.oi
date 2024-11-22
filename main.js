document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".Yes-btn");
  const noBtn = document.querySelector(".No-btn");

  let canMoveNoButton = true; // Controls the movement of the "No" button

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you so much ❤️";
    gif.src = "https://media.giphy.com/media/QxSNEIfNMJwBJg21pe/giphy.gif";

    
    canMoveNoButton = false;
  });

  function moveButton() {
    if (!canMoveNoButton) return;

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }

  
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
  noBtn.addEventListener("touchmove", moveButton); 

});