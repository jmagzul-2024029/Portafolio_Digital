import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import WelcomePage from '../../features/home/HomePage.jsx'
import AboutPage from '../../features/about/AboutPage.jsx'
import ProjectsPage from '../../features/projects/ProjectsPage.jsx'
import ContactPage from '../../features/contact/ContactPage.jsx'

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/sobre-mi" element={<AboutPage />} />
                <Route path="/proyectos" element={<ProjectsPage />} />
                <Route path="/contacto" element={<ContactPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
