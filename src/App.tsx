import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/Navbar.tsx'

// import 'projects.json'

function App() {
  return (
    <>
        <Navbar />
        <div className='content-container' id='landing-splash'>
            <div className='intro-content'>
                <h1>Aidan Farber</h1>
                <h3>Software Engineer</h3>
                <hr/>
                <p>
                    Hi! I'm Aidan, a software engineer based out of New Jersey! I'm an <span>ambitious, curious, and resilient</span> individual with a passion for
                    problem solving and exploring different aspects of technology.
                </p>
            </div>
        </div>
        <hr className='content-hr' />
        <div className='content-container' id='work-exp'>

        </div>
        <hr className='content-hr' />
        <div className='content-container' id='projects'>

        </div>
        <footer>
            <address>
            Created by: <a href='mailto:adevfarber@gmail.com'>Aidan Farber</a>
            </address>
            <a href="/">To Top of the Page</a>
        </footer>
    </>
  )
}

export default App
