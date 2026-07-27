function ContactPage() {
    return (
        <section className="panel contact-panel" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div className="section-title">
                <h2>¿Listo para crear algo increíble?</h2>
                <span>Contacto</span>
            </div>
            <p>Estoy disponible para prácticas, proyectos colaborativos y nuevas oportunidades. Haz click sobre las tarjetas de abajo y conoce más sobre mi trabajo.</p>

            <div className="contact-stats">
                <div className="stat-box">
                    <h3>10+</h3>
                    <span>Proyectos</span>
                </div>

                <div className="stat-box">
                    <h3>8+</h3>
                    <span>Tecnologías</span>
                </div>

                <div className="stat-box">
                    <h3>100%</h3>
                    <span>Compromiso</span>
                </div>

                <div className="stat-box">
                    <h3>🟢</h3>
                    <span>Disponible</span>
                </div>
            </div>

            <div className="contact-grid">
                <a
                    className="contact-card"
                    href="https://www.linkedin.com/in/jorge-magzul-953925423/?skipRedirect=true"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h3>LinkedIn</h3>
                    <p>Perfil profesional y trayectoria.</p>
                    <p>Revisa mi perfil profesional para conocer más sobre mis aptitudes en trabajo en equipo, metodologías ágiles y proyectos colaborativos.</p>
                </a>

                <a className="contact-card" href="https://github.com/jmagzul-2024029" target="_blank" rel="noreferrer">
                    <h3>GitHub</h3>
                    <p>Explora los repositorios de mis proyectos, desde aplicaciones full-stack hasta soluciones desarrolladas con React, Java, Node.js y más tecnologías.</p>

                </a>
                <a className="contact-card" href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgemagzul10@gmail.com" target="_blank">
                    <h3>Correo</h3>
                    <p>Escríbeme directamente para consultas sobre prácticas, colaboraciones o cualquier duda sobre mis proyectos.</p>
                </a>
            </div>
        </section>
    )
}

export default ContactPage
