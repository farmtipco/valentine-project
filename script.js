let noCount = 0;

const phrases = [
  "ทำไม!",
  "เป็นเถอะน้าาา",
  "แง;-;",
  "ถ้ากดเป็นจะได้กินหนม",
  "จ๋วยยยยย",
  "You're breaking my heart :(",
  ""
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const image = document.getElementById("image");

yesBtn.addEventListener("click", function () {
  image.src = "https://media.tenor.com/_OyACCphWFkAAAAi/rabbit.gif";
  image.classList.add("celebrate-img")
  text.innerHTML = "YAYYY!!!! ❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", function () {
  noCount++

  yesBtn.style.fontSize = (16 + noCount * 13) + "px";

  if (noCount < phrases.length) {
    noBtn.innerText = phrases[noCount - 1];
  }
});
