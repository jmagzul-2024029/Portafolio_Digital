import skills from '../../../shared/data/skills.js'
import SkillBar from './SkillBar.jsx'

function Skills() {
    return (
        <div className="panel">
            <div className="section-title">
                <h2>Habilidades</h2>
                <span>2c · Nivel de dominio</span>
            </div>
            <div className="skill-bars">
                {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    )
}

export default Skills
