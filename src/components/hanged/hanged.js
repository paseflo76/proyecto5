import { createButton } from '../button/button'
import './hanged.css'

export function createHangedComponent() {
  const palabras = [
    'inexorable',
    'obfuscado',
    'hipoglucemia',
    'claustrofobia',
    'epistemologia',
    'misántropo',
    'paralelepípedo',
    'sacrílego',
    'anticonstitucional',
    'dodecaedro',
    'filantropía',
    'metempsicosis',
    'procrastinar',
    'onomatopeya',
    'estratósfera',
    'altruismo',
    'hemisferio',
    'otorrinolaringólogo'
  ]
  let palabraSecreta =
    palabras[Math.floor(Math.random() * palabras.length)].toUpperCase()
  let letrasAdivinadas = Array(palabraSecreta.length).fill('_')
  let intentos = 6
  let letrasIncorrectas = []

  const hangedContainer = document.createElement('section')
  hangedContainer.id = 'hanged'

  const contenidoContainer = document.createElement('div')
  contenidoContainer.id = 'contenido'

  const titulo = document.createElement('h2')
  titulo.textContent = 'Juego del Ahorcado'

  const palabraHTML = document.createElement('p')
  palabraHTML.textContent = letrasAdivinadas.join(' ')

  const intentosHTML = document.createElement('p')
  intentosHTML.textContent = `Intentos restantes: ${intentos}`

  const letrasIncorrectasHTML = document.createElement('p')
  letrasIncorrectasHTML.textContent = `Letras incorrectas: ${letrasIncorrectas.join(
    ', '
  )}`

  const mensaje = document.createElement('p')
  mensaje.id = 'mensaje'
  mensaje.textContent = 'Adivina la palabra'

  // Contenedor para la figura del ahorcado
  const figuraAhorcado = document.createElement('div')
  figuraAhorcado.id = 'figura-ahorcado'

  // Función para actualizar la figura del muñeco
  const actualizarFigura = () => {
    figuraAhorcado.innerHTML = '' // Limpiamos la figura anterior
    const partes = [
      'cabeza',
      'cuerpo',
      'brazo-izquierdo',
      'brazo-derecho',
      'pierna-izquierda',
      'pierna-derecha'
    ]
    const maxPartes = 6 - intentos // Número de partes que se deben mostrar

    for (let i = 0; i < maxPartes; i++) {
      const parte = document.createElement('div')
      parte.className = `parte ${partes[i]}`
      figuraAhorcado.appendChild(parte)
    }
  }

  const manejarLetra = (letra) => {
    if (letrasIncorrectas.includes(letra) || letrasAdivinadas.includes(letra))
      return

    if (palabraSecreta.includes(letra)) {
      palabraSecreta.split('').forEach((char, index) => {
        if (char === letra) letrasAdivinadas[index] = letra
      })
    } else {
      intentos--
      letrasIncorrectas.push(letra)
      actualizarFigura() // Actualizamos la figura al fallar
    }

    palabraHTML.textContent = letrasAdivinadas.join(' ')
    intentosHTML.textContent = `Intentos restantes: ${intentos}`
    letrasIncorrectasHTML.textContent = `Letras incorrectas: ${letrasIncorrectas.join(
      ', '
    )}`

    if (letrasAdivinadas.join('') === palabraSecreta) {
      mensaje.textContent = '¡Has ganado!'
    } else if (intentos === 0) {
      mensaje.textContent = `¡Has perdido! La palabra era ${palabraSecreta}`
    }
  }

  const botonesContainer = document.createElement('div')
  botonesContainer.id = 'botones'

  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((letra) => {
    const boton = createButton(letra, () => manejarLetra(letra), 'tecla')
    botonesContainer.appendChild(boton)
  })

  contenidoContainer.appendChild(titulo)
  contenidoContainer.appendChild(palabraHTML)
  contenidoContainer.appendChild(intentosHTML)
  contenidoContainer.appendChild(letrasIncorrectasHTML)
  contenidoContainer.appendChild(mensaje)
  contenidoContainer.appendChild(figuraAhorcado) // Añadimos el contenedor de la figura

  hangedContainer.appendChild(contenidoContainer)
  hangedContainer.appendChild(botonesContainer)

  return hangedContainer
}
