import './memory.css'

// Función para crear el componente Memory
export function createMemoryComponent() {
  // Contenedor principal del juego
  const memoryContainer = document.createElement('section')
  memoryContainer.id = 'memory'

  // Array de cartas
  const arrayCartas = [
    { id: 1, color: 'red' },
    { id: 2, color: 'orange' },
    { id: 3, color: 'blue' },
    { id: 4, color: 'pink' },
    { id: 5, color: 'black' },
    { id: 6, color: 'green' },
    { id: 7, color: 'violet' },
    { id: 8, color: 'red' },
    { id: 9, color: 'orange' },
    { id: 10, color: 'blue' },
    { id: 11, color: 'pink' },
    { id: 12, color: 'black' },
    { id: 13, color: 'green' },
    { id: 14, color: 'violet' }
  ]

  // Variables globales
  let contador = 0
  let carta1
  let carta2
  let puntuacion = parseInt(localStorage.getItem('memoryScore')) || 0

  // Barajar las cartas
  arrayCartas.sort(() => Math.random() - Math.random())

  // Elementos del DOM
  const puntuacionHTML = document.createElement('h3')
  puntuacionHTML.textContent = `Puntuación: ${puntuacion}`
  memoryContainer.appendChild(puntuacionHTML)

  // Función para actualizar la puntuación
  const actualizarPuntuacion = () => {
    localStorage.setItem('memoryScore', puntuacion)
    puntuacionHTML.textContent = `Puntuación: ${puntuacion}`
  }

  // Función para resetear las variables
  const resetearValores = () => {
    contador = 0
    carta1 = undefined
    carta2 = undefined
  }

  // Función para resetear una carta al estado inicial
  const resetearCarta = (cartaGenerica) => {
    cartaGenerica.nodoHTML.style.backgroundColor = '#4d0038'
    cartaGenerica.nodoHTML.style.backgroundImage =
      'url(https://www.transparenttextures.com/patterns/crissxcross.png)'
  }

  // Función para comprobar si las cartas coinciden
  const comprobar = () => {
    if (carta1.datosCarta.color === carta2.datosCarta.color) {
      puntuacion++
      actualizarPuntuacion()
      resetearValores()
    } else {
      puntuacion--
      actualizarPuntuacion()
      setTimeout(() => {
        resetearCarta(carta1)
        resetearCarta(carta2)
        resetearValores()
      }, 1000)
    }
  }

  // Función para manejar la selección de cartas
  const seleccionar = (divCartaNodoHTML, datosDeCadaCarta) => {
    if (contador < 2) {
      contador++
      divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color
      divCartaNodoHTML.style.backgroundImage = 'none'
    }

    if (contador === 1) {
      carta1 = { nodoHTML: divCartaNodoHTML, datosCarta: datosDeCadaCarta }
    } else if (contador === 2) {
      carta2 = { nodoHTML: divCartaNodoHTML, datosCarta: datosDeCadaCarta }
      comprobar()
    }
  }

  // Crear las cartas en el DOM
  arrayCartas.forEach((datosDeCadaCarta) => {
    const divCartaNodoHTML = document.createElement('div')
    divCartaNodoHTML.className = 'carta'
    divCartaNodoHTML.addEventListener('click', () =>
      seleccionar(divCartaNodoHTML, datosDeCadaCarta)
    )
    memoryContainer.appendChild(divCartaNodoHTML)
  })

  return memoryContainer
}
