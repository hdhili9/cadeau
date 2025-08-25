function createHeart() {
       const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    // remove heart after animation ends
    setTimeout(() => {
      heart.remove();}, 5000);
  }

  // create heart every 400ms (not too fast)
  setInterval(createHeart, 300);

    
    // Love letter popup

function souris(){
    const loveBtn = document.getElementById("loveBtn");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

loveBtn.addEventListener("click", () => {
  letter.style.display = "block";
});

closeLetter.addEventListener("click", () => {
  letter.style.display = "none";
});
}