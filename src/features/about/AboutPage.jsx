import Description from './components/Description.jsx'
import GeneralData from './components/GeneralData.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'

function AboutPage() {
    return (
        <section>
            <div className="about-grid">
                <Description />
                <GeneralData />
            </div>
            <div className="about-grid">
                <Skills />
                <Resume />
            </div>
        </section>
    )
}

export default AboutPage
