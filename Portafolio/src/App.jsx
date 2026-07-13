import './App.css'

const projects = [
  {
    title: 'Plataforma de reservas',
    description:
      'Diseñé una web de reservas con flujo intuitivo, carga rápida y enfoque en conversión.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Dashboard de métricas',
    description:
      'Construí un panel visual para monitorear resultados clave y tomar decisiones en tiempo real.',
    stack: ['JavaScript', 'APIs', 'UI Design'],
  },
  {
    title: 'E-commerce editorial',
    description:
      'Desarrollé una tienda con catálogo responsive, filtrado dinámico y experiencia de compra optimizada.',
    stack: ['React', 'Figma', 'Accessibility'],
  },
]

const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'UI Design', 'Figma', 'Node.js', 'Accesibilidad']

function App() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home">
          Jorge Magzul
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <p className="eyebrow">Desarrollador Frontend · Diseñador UI</p>
            <h1>Creo experiencias digitales claras, rápidas y memorables.</h1>
            <p>
              Transformo ideas en productos que conectan con las personas y ayudan a crecer a las marcas.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">
                Ver proyectos
              </a>
              <a className="btn btn-secondary" href="#contact">
                Hablemos
              </a>
            </div>
            <ul className="highlights">
              <li>Interfaces accesibles</li>
              <li>Diseño centrado en el usuario</li>
              <li>Desarrollo con React</li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Resumen profesional">
            <div className="avatar">JM</div>
            <div className="stat-list">
              <div className="stat-item">
                <strong>+3 años</strong>
                <span>Desarrollando proyectos</span>
              </div>
              <div className="stat-item">
                <strong>+15</strong>
                <span>Proyectos entregados</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>Enfoque en calidad y superación</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="panel">
          <div className="section-title">
            <h2>Sobre mí</h2>
            <span>Diseño y desarrollo</span>
          </div>
          <p>
            Soy un profesional apasionado por convertir problemas complejos en interfaces simples,
            elegantes y funcionales. Me especializo en crear productos digitales que combinan
            estética, usabilidad y rendimiento.
          </p>
        </section>

        <section id="projects" className="panel">
          <div className="section-title">
            <h2>Proyectos destacados</h2>
            <span>Últimos trabajos</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.stack.map((item) => (
                    <span className="tech-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="panel">
          <div className="section-title">
            <h2>Habilidades</h2>
            <span>Tecnologías y herramientas</span>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact-panel">
          <div>
            <h2>¿Listo para crear algo increíble?</h2>
            <p>Estoy disponible para proyectos freelance, colaboraciones y nuevas ideas.</p>
          </div>
          <a className="btn btn-primary" href="mailto:jorge@tuportfolio.com">
            Contactar
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
