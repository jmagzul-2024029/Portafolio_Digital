import { useState } from 'react'

function ProjectCard({ project }) {
    const [imageFailed, setImageFailed] = useState(false)

    return (
        <article className="project-card">
            <div className="project-card__image">
                {imageFailed ? (
                    <p className="project-card__placeholder">
                        Imagen-proyecto
                    </p>
                ) : (
                    <img
                        src={project.image}
                        alt={`Captura de ${project.title}`}
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                )}
            </div>
            <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                    {project.stack.map((tech) => (
                        <span className="tech-tag" key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                <a className="project-card__link" href={project.repo} target="_blank" rel="noreferrer">
                    Ver repositorio →
                </a>
            </div>
        </article>
    )
}

export default ProjectCard
