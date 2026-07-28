import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DevImg from '/foto_perfil.jpeg'

function HomePage() {
    return (
        <section className="hero">

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="eyebrow">Bienvenido a mi portafolio</p>

                <h1>
                    Transformo ideas en aplicaciones web y de escritorio.
                </h1>

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
            </motion.div>

            <motion.aside
                className="hero-card"
                aria-label="Foto de perfil"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img src={DevImg} alt="Jorge Magzul" />

                <p>
                    ¡Hola! Soy Jorge Magzul, actualmente soy estudiante de informática,
                    me apasiona el mundo del desarrollo y la superación y aprendizaje
                    constante.
                </p>

                <ul className="highlights">
                    <li>Desarrollo con React & JavaScript</li>
                    <li>React Native</li>
                    <li>Aplicaciones web y de escritorio</li>
                </ul>
            </motion.aside>

        </section>
    )
}

export default HomePage