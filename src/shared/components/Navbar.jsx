import { NavLink } from 'react-router-dom'
import useUIStore from '../store/useUIStore.js'

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
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
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) => (isActive ? 'is-active' : '')}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </NavLink>
                ))}
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
