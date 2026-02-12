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

  yesBtn.style.fontSize = (50 + noCount * 13) + "px";

  if (noCount < phrases.length) {
    noBtn.innerText = phrases[noCount - 1];
  }
});

//หลังกดเป็น
let chatStep = 0;

const messages = [
  ["left", "ขอบคุณที่กดเป็นนะ เค้าดีใจมากๆเลย❤️"],
  ["right", "ต้องกดอยู่แล้วสิ!"],
  ["left", "ปีนี้ขอให้เราอยู่ด้วยกันไปนานๆเลย"],
  ["right", "นานแค่ไหน?!"],
  ["left", "เหลืออีกตั้ง 73 ฤดูร้อน,ฝน,หนาวแหนะ"],
  ["left", "Happy Valentine’s Day;)💖"],
  ["right", "❤️"]
];

image.addEventListener("click", function () {

  // ถ้ายังไม่เข้าสู่โหมด chat
  if (text.innerHTML === "YAYYY!!!! ❤️") {
    showChatScreen();
  }
});

function showChatScreen() {
  document.body.innerHTML = `
    <div class="phone-wrapper">
      <img src="image/iphone.png" class="phone-frame">
      <div class="chat-screen" id="chatScreen"></div>
    </div>
  `;

  const chatScreen = document.getElementById("chatScreen");

  document.addEventListener("click", function () {
    if (chatStep < messages.length) {

      const bubble = document.createElement("div");
      bubble.classList.add("chat-bubble");

      const side = messages[chatStep][0];
      const messageText = messages[chatStep][1];

      if (side === "left") {
        bubble.classList.add("chat-left");
      } else {
        bubble.classList.add("chat-right");
      }

      bubble.innerText = messageText;

      chatScreen.appendChild(bubble);
      chatScreen.scrollTop = chatScreen.scrollHeight;

      chatStep++;
    }
  });


}
