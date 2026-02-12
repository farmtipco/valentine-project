let noCount = 0;

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Like REAALLYYY?",
  "Pretty please?",
  "You're breaking my heart :(",
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const image = document.getElementById("image");

yesBtn.addEventListener("click", function () {
  image.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  text.innerHTML = "YAYYY!!!! ❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", function () {
  noCount++;

  yesBtn.style.fontSize = (16 + noCount * 5) + "px";

  if (noCount < phrases.length) {
    noBtn.innerText = phrases[noCount];
  }
});
