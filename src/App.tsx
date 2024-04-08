import './App.css'
import { Footer } from './components/footer'
import { Skill } from './components/skill'
import { Timeline } from './components/timeline'
import { Resume } from './components/resume'
import { Work } from './components/work'

function App() {
  return (
    <>
      <Resume />
      <Work />
      <Skill />
      <Timeline />
      <Footer />
    </>
  )
}

export default App
