import { NavLink } from 'react-router-dom'
import useUIStore from '../store/useUIStore.js'

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
    // Apunta directamente al archivo y se añade el flag download para descargar
    { to: '/HT3-2024029.pdf', label: 'Download CV', download: true },
]

function Navbar() {
    const isMenuOpen = useUIStore((state) => state.isMenuOpen)
    const toggleMenu = useUIStore((state) => state.toggleMenu)
    const closeMenu = useUIStore((state) => state.closeMenu)

    return (
        <header className="site-header">
            <NavLink className="brand" to="/" onClick={closeMenu}>
                Jorge Magzul
            </NavLink>

            <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
                {links.map((link) => {
                    // 2. Si el link tiene la propiedad download, renderiza un enlace HTML tradicional
                    if (link.download) {
                        return (
                            <a
                                key={link.to}
                                href={link.to}
                                download="HT3-2024029.pdf" // Fuerza la descarga y asigna nombre al archivo
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        )
                    }

                    // 3. De lo contrario, sigue usando el NavLink de React Router
                    return (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) => (isActive ? 'is-active' : '')}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </NavLink>
                    )
                })}
            </nav>

            <button
                className="nav-toggle"
                onClick={toggleMenu}
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
            >
                <span />
                <span />
                <span />
            </button>
        </header>
    )
}

export default Navbar
