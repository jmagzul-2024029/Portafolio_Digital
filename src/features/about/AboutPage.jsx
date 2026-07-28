import { motion } from 'framer-motion'
import Description from './components/Description.jsx'
import GeneralData from './components/GeneralData.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'

function AboutPage() {
    return (
        <section>

            <div className="about-grid">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Description />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <GeneralData />
                </motion.div>

            </div>

            <div className="about-grid">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Skills />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <Resume />
                </motion.div>

            </div>

        </section>
    )
}

export default AboutPage