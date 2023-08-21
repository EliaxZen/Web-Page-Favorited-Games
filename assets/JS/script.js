const getHours = () => {
  const horas = document.querySelector(".horas-text");
  const minutos = document.querySelector(".minutos-text");
  const segundos = document.querySelector(".segundos-text");
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  horas.innerHTML = hours;
  minutos.innerHTML = minutes;
  segundos.innerHTML = seconds;
};
setInterval(() => {
  getHours();
}, 1);
function subirTela() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function decidirBotaoScroll() {
  if (window.scrollY === 100px) {
    //ocultar botão
    document.querySelector(".scrollbutton").style.display = "none";
  } else {
    //mostrar botão
    document.querySelector(".scrollbutton").style.display = "block";
  }
}
window.addEventListener("scroll", decidirBotaoScroll);
