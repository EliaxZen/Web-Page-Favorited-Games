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
