const titleText = document.getElementById("titleText");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const blowCakeBtn = document.getElementById("blowCakeBtn");
const blowCandleBtn = document.getElementById("blowCandleBtn");

const cakeStage = document.getElementById("cakeStage");
const cakeImg = document.getElementById("cakeImg");

requestAnimationFrame(() => cakeStage.classList.add("is-ready"));

function swapCakeImage(newSrc) {
  cakeStage.classList.add("is-swap");
  setTimeout(() => {
    cakeImg.src = newSrc;
    cakeStage.classList.remove("is-swap");
  }, 180);
}

// ✅ STEP 1: เป่าเค้ก -> ซ่อนข้อความ + เปลี่ยนเป็น cake1.png + ไป step2
blowCakeBtn.addEventListener("click", () => {
  if (titleText) titleText.style.display = "none";

  // จาก cake.png -> cake1.png (ยังไม่เป่า / มีเทียน)
  swapCakeImage("assets/cake1.png");

  step1.style.display = "none";
  step2.style.display = "block";
});

// ✅ STEP 2: เป่าเทียน -> ควัน + เปลี่ยนเป็น cake2.png + ไป step3
blowCandleBtn.addEventListener("click", () => {
  cakeStage.classList.add("show-smoke");

  // จาก cake1.png -> cake2.png (เป่าแล้ว)
  swapCakeImage("assets/cake2.png");

  setTimeout(() => {
    cakeStage.classList.remove("show-smoke");
  }, 1300);

  setTimeout(() => {
    step2.style.display = "none";
    step3.style.display = "block";
  }, 650);
});
