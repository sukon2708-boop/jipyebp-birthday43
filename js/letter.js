const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดนะคะ แฟรงค์🩷
ขอบคุณที่เกิดมาให้เราได้เจอกัน ขอบคุณที่เข้ามาเป็นรอยยิ้มของเค้า เค้าไม่รู้ว่าอนาคตของเราจะตาหน้าเป็นยังไง แต่ทุกช่วงเวลาที่มีเธออยู่ค่าเสมอนะ
เค้าอยากให้แฟ้งรู้ว่า การได้รักเธอ เป็นหนึ่งในเรื่องที่ดีที่สุดสำหรับเค้านะ เค้าอาจไม่ใช่คนที่เก่งเรื่องความรักที่สุด อาจงอแงบ้าง คิดมากบ้าง บางครั้งก็ทำให้เธอต้องเหนื่อยใจหรือไม่เข้าใจ เค้าไม่ได้เพอร์เฟ็กต์ แต่เค้าอยากให้เธอมั่นใจว่าเค้าตั้งใจรักษาความรักครั้งนี้จริงๆ เค้าและเธอเป็นเพียงคนธรรมดาคนหนึ่งที่มีอารมณ์ อาจพลาดบ้าง อาจอ่อนแอบ้าง แต่เค้าก็อยากแก้ไขให้ดีขึ้น ไม่อยากหนีหรือปล่อยมือเลยสักครั้งนะ

วันเกิดแฟ้งปีนี้🎂
ขอให้เธอเติบโตไปในทิศทางที่ดี 
ขอให้เธอมีความสุขในการเป็นตัวเอง ภูมิใจในตัวเอง 
ขอให้เธอสุขภาพแข็งแรงไม่ต้องเจ็บไข้ได้ป่วยอีกแล้ว 
ขอให้เธอประสบความเร็จ ไม่หลงทางในชีวิตนาน จุดไฟในตัวเองได้เรื่อยๆ 
ขอให้ปีนี้เป็นปีที่เธอมั่นใจในตัวเองมากขึ้น มั่นใจในความฝันของตัวเอง และมั่นใจในความรักของเรา
ขอให้เราได้อยู่ด้วยกันไปเรื่อยๆ 
ขอให้เค้าได้อยู่อวยพรให้เธอในทุกๆปี 
    
เค้าสัญญาว่าจะพยายามเพื่อเรา จะเลือกแฟ้ง จะรักษาใจแฟ้งเสมอ จะไม่ไปไหนอยู่กับเธอเรื่อยไปจนกว่าเธอจะไม่ต้องการเค้าอีกต่อไปแล้ว
  
เค้ารักเธอนะ อนาคตของเค้าจะมีเธออยู่เสมอ❤️
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
