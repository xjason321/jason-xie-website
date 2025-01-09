import { Routes, Route } from 'react-router-dom'

import { Home } from './_root/pages/_index';
import './globals.css';
import Projects from './_root/pages/Projects';
import Notes from './_root/pages/Notes';
import About from './_root/pages/About';

const App = () => {
  return (
    <main className='h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="notes" element={<Notes />} />
          <Route path="about" element={<About />} />
        </Routes>
    </main>
  )
}

export default App