import './header.css'

export function createHeader() {
  const containerHeader = document.createElement('header')
  containerHeader.id = 'header'

  const divHeader = document.createElement('div')
  divHeader.className = 'anchor'

  const h1 = document.createElement('h1')
  h1.textContent = 'Juegos'

  // Crear el ul
  const navList = document.createElement('ul')
  navList.className = 'nav-list'

  // Crear los li y a
  const links = [
    { href: '#memory', text: 'memory' },
    { href: '#three', text: 'three' },
    { href: '#hanged', text: 'hanged' }
  ]

  links.forEach((link) => {
    const listItem = document.createElement('li')
    listItem.className = 'nav-item'

    const anchor = document.createElement('a')
    anchor.href = link.href
    anchor.textContent = link.text
    anchor.className = 'nav-link'

    listItem.appendChild(anchor)
    navList.appendChild(listItem)
  })

  containerHeader.appendChild(h1)
  // Añadir ul al divHeader
  divHeader.appendChild(navList)

  // Añadir divHeader al contenedor principal
  containerHeader.appendChild(divHeader)

  return containerHeader
}
