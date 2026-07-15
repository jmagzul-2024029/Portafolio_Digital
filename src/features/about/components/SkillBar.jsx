function SkillBar({ name, level }) {
    return (
        <div>
            <div className="skill-bar__label">
                <span>{name}</span>
                <span className="skill-bar__value">{level}%</span>
            </div>
            <div className="skill-bar__track">
                <div className="skill-bar__fill" style={{ width: `${level}%` }} />
            </div>
        </div>
    )
}

export default SkillBar
