import projects from '../../shared/data/projects.js'
import ProjectCard from './components/ProjectCard.jsx'

function ProjectsPage() {
    return (
        <section className="panel">
            <div className="section-title">
                <h2>Portafolio de aplicaciones</h2>
                <span>Proyectos</span>
            </div>
            <p>Proyectos reales con enlace directo a su repositorio en GitHub.</p>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsPage
