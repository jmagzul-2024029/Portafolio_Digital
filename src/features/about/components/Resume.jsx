const education = [
    {
        title: 'Perito en Desarrollo de Software',
        place: 'Fundación Kinal',
        period: 'En curso',
        detail: 'Formación en desarrollo web y mobile, trabajo colaborativo con Git/GitHub.',
    },
]

const experience = [
    {
        title: 'Proyectos de curso y preprácticas',
        place: 'Fundación Kinal',
        period: 'Actual',
        detail: 'Desarrollo frontend en proyectos colaborativos, incluyendo un sistema bancario en equipo.',
    },
]

function Timeline({ items }) {
    return (
        <ul className="timeline">
            {items.map((item) => (
                <li className="timeline__item" key={item.title}>
                    <span className="timeline__marker" />
                    <div>
                        <p className="timeline__title">{item.title}</p>
                        <p className="timeline__meta">
                            {item.place} · {item.period}
                        </p>
                        <p className="timeline__detail">{item.detail}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

function Resume() {
    return (
        <div className="panel">
            <div className="section-title">
                <h2>Educación y experiencia</h2>
                <span>2d · Currículum</span>
            </div>
            <h3 className="timeline-title">Educación</h3>
            <Timeline items={education} />
            <h3 className="timeline-title">Experiencia</h3>
            <Timeline items={experience} />
        </div>
    )
}

export default Resume
