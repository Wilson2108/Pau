// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

document.querySelector('.arrow.next').addEventListener('click', () => {
  // Aplica el efecto de desaparición con escala
  document.body.classList.add('slide-out-left');

  // Espera que termine la animación antes de redirigir
  setTimeout(() => {
      window.location.href = 'foto.html'; // Navega a carta.html
  }, 500); // El tiempo coincide con la duración de la transición en CSS
});

document.querySelector('.arrow.prev').addEventListener('click', () => {
  // Aplica el efecto de desaparición con escala
  document.body.classList.add('slide-out-left');

  // Espera que termine la animación antes de redirigir
  setTimeout(() => {
      window.location.href = 'index.html'; // Navega a carta.html
  }, 500); // El tiempo coincide con la duración de la transición en CSS
});

// document.querySelector('.arrow.prev').addEventListener('click', () => {
//   window.location.href = 'index.html'; // Navega a index.html
// });

// document.querySelector('.arrow.next').addEventListener('click', () => {
//   window.location.href = 'foto.html'; // Navega a foto.html
// });