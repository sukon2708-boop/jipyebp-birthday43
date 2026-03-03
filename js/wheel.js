const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const modalBackdrop = document.getElementById("modalBackdrop");
const resultText = document.getElementById("resultText");

document.getElementById("closeModalBtn").addEventListener("click", ()=> modalBackdrop.style.display="none");
modalBackdrop.addEventListener("click", (e)=>{ if(e.target===modalBackdrop) modalBackdrop.style.display="none"; });
// ✅ แก้ของรางวัลได้ตรงนี้
const items = [
  "ขออะไรก็ได้เค้า 1 อย่าง",
  "เลี้ยงชาบูวว",
  "กอดฟรีไม่อั้น",
  "บัตรนกยูงหายงอน 1 ครั้ง",
  "เลี้ยงกาแฟ",
  "บัตรนวดฟรี 15 นาที"
];

let angle = 0;
let spinning = false;

function draw(){
  const cx = canvas.width/2;
  const cy = canvas.height/2;
  const r = canvas.width*0.42;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  // วงล้อ
  const slice = (Math.PI * 2) / items.length;

  for(let i=0;i<items.length;i++){
    const a0 = angle + i*slice;
    const a1 = a0 + slice;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();

    // สีสลับแบบเรียบง่าย (ไม่กำหนดค่าสีเยอะ)
    ctx.fillStyle = i % 2 === 0 ? "rgba(240,111,147,.55)" : "rgba(255,214,230,.75)";
    ctx.fill();

    // ข้อความ
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a0 + slice/2);
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(60,30,40,.9)";
    ctx.font = "bold 17px Prompt";
    ctx.fillText(items[i], r - 16, 6);
    ctx.restore();
  }

  // ขอบวงล้อ
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI*2);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(240,111,147,.55)";
  ctx.stroke();

  // ตัวชี้ด้านบน
  ctx.beginPath();
  ctx.moveTo(cx, cy - r - 10);
  ctx.lineTo(cx - 18, cy - r + 26);
  ctx.lineTo(cx + 18, cy - r + 26);
  ctx.closePath();
  ctx.fillStyle = "rgba(240,111,147,.95)";
  ctx.fill();
}

function pickResult(finalAngle){
  // ตัวชี้อยู่ด้านบน => มุม -pi/2
  const slice = (Math.PI * 2) / items.length;
  let a = (finalAngle - (-Math.PI/2)) % (Math.PI*2);
  if(a < 0) a += Math.PI*2;
  const idx = Math.floor((Math.PI*2 - a) / slice) % items.length;
  return items[idx];
}

function spin(){
  if(spinning) return;
  spinning = true;
  spinBtn.disabled = true;

  const start = angle;
  const extraTurns = 5 + Math.random()*3;
  const target = start + extraTurns*Math.PI*2 + (Math.random()*Math.PI*2);

  const duration = 2200;
  const t0 = performance.now();

  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

  function frame(t){
    const p = Math.min(1, (t - t0)/duration);
    const e = easeOutCubic(p);
    angle = start + (target - start)*e;
    draw();

    if(p < 1){
      requestAnimationFrame(frame);
    }else{
      const result = pickResult(angle);
      resultText.textContent = result;
      modalBackdrop.style.display = "flex";
      spinning = false;
      spinBtn.disabled = false;
    }
  }
  requestAnimationFrame(frame);
}

spinBtn.addEventListener("click", spin);

draw();
