function ContactPage() {
    return (
        <section className="panel contact-panel" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div className="section-title">
                <h2>¿Listo para crear algo increíble?</h2>
                <span>03 · Contacto</span>
            </div>
            <p>Estoy disponible para prácticas, proyectos colaborativos y nuevas oportunidades.</p>

            <div className="contact-grid">
                <a
                    className="contact-card"
                    href="https://linkedin.com/in/tu-usuario"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h3>LinkedIn</h3>
                    <p>Perfil profesional y trayectoria.</p>
                </a>
                <a
                    className="contact-card"
                    href="https://www.computrabajo.com.gt"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h3>CompuTrabajo</h3>
                    <p>Disponibilidad para nuevas oportunidades.</p>
                </a>
                <a className="contact-card" href="https://github.com/jmagzul-2024029" target="_blank" rel="noreferrer">
                    <h3>GitHub</h3>
                    <p>Podrás ver mi perfil o directamente los repositorios de mis proyectos.</p>
                    <ol>
                        <li><a href="https://github.com/jmagzul-2024029/Tienda-.git" style={{ textDecoration: 'none'}} target="_blank" rel="noreferrer">
                            Tienda Electrónica
                        </a></li>
                        <li><a href="https://github.com/jmagzul-2024029/Ahorcados-2024029.git" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Juego de Ahorcados
                        </a></li>
                        <li><a href="https://github.com/jmagzul-2024029/Ahorcados-2024029.git" style={{ textDecoration: 'none'}} target="_blank" rel="noreferrer">
                            Juego de Ahorcados
                        </a></li>
                        <li><a href="https://github.com/jmagzul-2024029/Ahorcados-2024029.git" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Juego de Ahorcados 
                        </a></li>
                    </ol>
                </a>
                <a className="contact-card" href="mailto:tu-correo@ejemplo.com">
                    <h3>Correo</h3>
                    <p>tu-correo@ejemplo.com</p>
                </a>
            </div>
        </section>
    )
}

export default ContactPage
