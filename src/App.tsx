import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import ContactPage from './pages/ContactPage'
import EducationPage from './pages/EducationPage'
import ExperiencePage from './pages/ExperiencePage'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'

// Remaining routes (ProjectDetail, NotFound) are added inside Layout as pages are built.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
