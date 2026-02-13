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
    else if (chatStep === messages.length) {

      chatStep++; // กันไม่ให้รันซ้ำ
      showFlowers();
    }
  });


}


function showFlowers() {

  document.body.innerHTML = `
    <div id="flowerScene">
      <div class="night-bg"></div>
      <img id="flowerGif" 
           src="https://media.tenor.com/aPFYmCN1OqsAAAAi/wrapped-gifts-birthday-presents.gif">
      <div class="glow"></div>
      <h1 class="final-text"></h1>
    </div>
  `;

  const scene = document.getElementById("flowerScene");
  const gif = document.getElementById("flowerGif");
  const text = document.querySelector(".final-text");

  // ===== Scene style =====
  scene.style.position = "fixed";
  scene.style.top = "0";
  scene.style.left = "0";
  scene.style.width = "100vw";
  scene.style.height = "100vh";
  scene.style.display = "flex";
  scene.style.flexDirection = "column";
  scene.style.justifyContent = "center";
  scene.style.alignItems = "center";
  scene.style.background = "radial-gradient(circle at center, #1a001f, #000)";
  scene.style.overflow = "hidden"; ฃ
  scene.style.background = "linear-gradient(135deg, #ffd6ec, #ff99cc, #ff66b2)";


  // ===== GIF style =====
  gif.style.width = "280px";
  gif.style.opacity = "0";
  gif.style.transform = "scale(0.6)";
  gif.style.transition = "all 1.8s cubic-bezier(.68,-0.55,.27,1.55)";


  // ===== Text style =====
  text.style.color = "white";
  text.style.marginTop = "30px";
  text.style.fontSize = "32px";
  text.style.opacity = "0";
  text.style.transition = "opacity 2s ease";
  text.style.fontFamily = "cursive";
  text.style.textShadow = "0 0 15px hotpink";

  // ===== Animate In =====
  setTimeout(() => {
    gif.style.opacity = "1";
    gif.style.transform = "scale(1)";
  }, 300);

  setTimeout(() => {
    text.style.opacity = "1";
  }, 1500);

}

