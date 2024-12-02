import { createFooter } from './src/components/footer/footer'
import { createHangedComponent } from './src/components/hanged/hanged'
import { createHeader } from './src/components/header/header'
import { createMemoryComponent } from './src/components/memory/memory'
import { createThreeComponent } from './src/components/three/three'
import './style.css'

// Importamos el componente Memory

// Obtenemos el contenedor principal
const app = document.querySelector('#app')

// Creamos el componente Memory y lo añadimos al DOM
const memoryGame = createMemoryComponent()
const threeGame = createThreeComponent()
const hangedGame = createHangedComponent()
const Header = createHeader()
const footer = createFooter()

app.appendChild(Header)
app.appendChild(memoryGame)
app.appendChild(threeGame)
app.appendChild(hangedGame)
app.appendChild(footer)
