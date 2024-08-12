import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/Navbar.tsx'

// import 'projects.json'


function openNav() {
    document.getElementById("navbar").style.width = "251px";
    document.getElementById("main").style.marginLeft = "250px";
}


function App() {
  return (
    <>
        <button id='openNavButton' onClick={openNav}>&#8801;</button>
        <Navbar/>
        <div id='main'>
            <div className='content-container inline-flexbox landing-splash' id='home'>
                <div className='content-half intro-content'>
                    <div className='info-box'>
                        <h1>Aidan Farber</h1>
                        <h3>Software Engineer</h3>
                        <hr/>
                        <p>
                            Hi! I'm Aidan, a software engineer based out of New Jersey! I'm an <span>ambitious, curious, and resilient</span> individual with a passion for
                            problem solving and exploring different aspects of technology.
                        </p>
                    </div>
                </div>
                <div className='content-half intro-picture'>
                    <img src="../public/me_n_bee.JPEG" alt="" />
                </div>
            </div>
            <hr className='content-hr' />
            <div className='content-container inline-flexbox' id='about'>
                <div className='content-half'>
                </div>
                <div id='about-text' className='content-half flexbox'>
                    <div id='upper-content' className='container-vert'>
                        <h2>Hobbies</h2>
                        <ul>
                            <li>Photography</li>
                            <li>Woodworking</li>
                            <li>Programming</li>
                        </ul>
                    </div>
                    <div id='lower-content' className='container-vert'>
                        <h2>Social Links</h2>
                        <ul>
                            <li><img src="" alt="LinkedIn" /></li>
                            <li><img src="" alt="Instagram" /></li>
                            <li><img src="" alt="GitHub" /></li>
                        </ul>
                    </div>
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
                <a href="#">To Top of the Page</a>
            </footer>
        </div>
    </>
  )
}

export default App
