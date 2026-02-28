/* 💖 Corazones flotando */
const container = document.getElementById("hearts-container");

function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random()*100 + "%";
  heart.style.animationDuration = (Math.random()*5+5)+"s";
  heart.style.fontSize = (Math.random()*20+15)+"px";

  container.appendChild(heart);

  setTimeout(()=>heart.remove(),10000);
}

setInterval(createHeart,500);

/* 💔 Botón NO huye */
const noBtn = document.getElementById("noBtn");

function mover(){
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();

  const x = Math.random()*(rect.width-100);
  const y = Math.random()*(rect.height-50);

  noBtn.style.position="absolute";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
}

noBtn.addEventListener("mouseover", mover);
noBtn.addEventListener("touchstart", e=>{
  e.preventDefault();
  mover();
});

/* 🎆 Fuegos artificiales */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function fireworks(){
  for(let i=0;i<120;i++){
    const x = Math.random()*canvas.width;
    const y = Math.random()*canvas.height;
    const size = Math.random()*4+2;
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
  }
}

/* 📸 Fotos */
const photos = ["Foto1.jpeg","Foto2.jpeg","Foto3.jpeg", "Foto4.jpeg", "Foto5.jpeg", "Foto6.jpeg", "Foto7.jpeg", "Foto8.jpeg", "Foto9.jpeg", "Foto10.jpeg"];

function showPhotoHeart(){
  const photo = document.createElement("div");
  photo.classList.add("photo-heart");
  photo.style.backgroundImage = `url(${photos[Math.floor(Math.random()*photos.length)]})`;
  photo.style.left = Math.random()*(window.innerWidth-200)+"px";
  photo.style.top = Math.random()*(window.innerHeight-200)+"px";
  document.body.appendChild(photo);
  setTimeout(()=>photo.remove(),3000);
}

/* 💖 Botón SÍ */
document.getElementById("yesBtn").addEventListener("click",()=>{

  emailjs.send("service_8r3sogx","template_iswrfv6",{
    respuesta:"Dijo que SÍ 💖",
    fecha:new Date().toLocaleString()
  });

  fireworks();

  let interval = setInterval(showPhotoHeart,500);
  setTimeout(()=>clearInterval(interval),5000);

  const thanks = document.createElement("div");
  thanks.classList.add("thanks");
  thanks.innerHTML = "💖 ¡Gracias por decir que sí! 💖";
  document.querySelector(".card").appendChild(thanks);
});
