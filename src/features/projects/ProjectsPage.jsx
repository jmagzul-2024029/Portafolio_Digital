import { motion } from 'framer-motion'
import projects from '../../shared/data/projects.js'
import ProjectCard from './components/ProjectCard.jsx'

function ProjectsPage() {
    return (
        <section className="panel">

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >


                <div className="section-title">
                    <h2>Portafolio de aplicaciones</h2>
                    <span>Proyectos</span>
                </div>
                <p>Proyectos reales con enlace directo a su repositorio en GitHub.</p>
                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>            </motion.div>

            <motion.aside
                className="hero-card"
                aria-label="Foto de perfil"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.aside>
        </section>
    )
}

export default ProjectsPage
