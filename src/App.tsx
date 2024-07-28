import { useState } from 'react'
import './App.css'
import 'projects.json'

function App() {

  return (
    <>
        <div className='content-container' id='landing-splash'>
            <h1>Aidan Farber</h1>
            <h3>Software Engineer</h3>
            <hr/>
            <p>
                Hi! I'm Aidan, a software engineer based out of New Jersey! I'm an <span>ambitious, curious, and resilient</span> individual with a passion for
                problem solving and exploring different aspects of technology.
            </p>
        </div>
        <div className='content-container' id='work-exp'>
        </div>
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
