const data = [
    { label: 'Nombre', value: 'Jorge Magzul' },
    { label: 'Edad', value: '[Completa tu edad]' },
    { label: 'Correo', value: '[tu-correo@ejemplo.com]' },
    { label: 'Años desarrollando', value: '[Ej. 2 años]' },
    { label: 'Formación actual', value: 'Estudiante en Fundación Kinal' },
]

function GeneralData() {
    return (
        <div className="panel">
            <div className="section-title">
                <h2>Datos generales</h2>
                <span>2b · Ficha</span>
            </div>
            <dl className="data-list">
                {data.map((item) => (
                    <div className="data-list__row" key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default GeneralData
