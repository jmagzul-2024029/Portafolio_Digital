import { Link } from 'react-router-dom'
import DevImg from '../../assets/ordenador-img.png'

function HomePage() {
    return (
        <section className="hero">
            <div>
                <p className="eyebrow">Bienvenido a mi portafolio</p>
                <h1>Transformo ideas en aplicaciones web y de escritorio.</h1>
                <p className="hero__phrase">
                    "Desarrollador Full-Stack enfocado en crear soluciones eficientes."
                </p>
                <div className="actions">
                    <Link className="btn btn-primary" to="/sobre-mi">
                        Conóceme
                    </Link>
                    <Link className="btn btn-secondary" to="/proyectos">
                        Ver proyectos
                    </Link>
                </div>
            </div>

            <aside className="hero-card" aria-label="Foto de perfil">
                <img src={DevImg} alt="Jorge Magzul" />
                <ul className="highlights">
                    <li>Desarrollo con React & JavaScript</li>
                    <li>React Native</li>
                    <li>Aplicaciones web y de escritorio</li>
                </ul>
            </aside>
        </section>
    )
}

export default HomePage
