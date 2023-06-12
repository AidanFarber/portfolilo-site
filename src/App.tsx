// import { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import linkedIn from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';

function App() {
  return (
    <div className="App">
        <header className="primary-header">
            <Navbar />
        </header>

        <main>
            <div id='landing-section' className='container flex column'>
                <h1 className='title'>Hi, I'm <span className='accent-text-1'>Aidan Farber</span>!</h1>
                <h2 className='subtitle'>Aspiring Software Engineer</h2>
            </div>
            <hr id='about'></hr>
            <div id='about-section' className='container'>
                <h1 className='underline header'>About</h1> 
                <div id='about-wrapper' className='grid'>
                    <p className='about-paragraph grid-item'>
                        Hi! My name is <span className='accent-text-1'>Aidan Farber</span>, aspiring software engineer, creative problem solver, lifelong learner, and maker of terrible
                        puns. Throughout my life I've always found toiling over a puzzle, trying to find many different solutions and approaches,
                        incredibly alluring! This drive eventually led me down the path of programming, a puzzle that never ceases to inspire and amaze me. I love a 
                        challenge and will always try to take on difficult tasks, as they can prove to be the best teachers.
                        I pride myself on my <span className='accent-text-1'>curiosity, persistence, communication skills, and problem solving skills</span>. I'm always open to a new challenge
                        and to learning new languages and frameworks! To the right are a few of the technologies I am familiar with my favorites
                        being C, C++, and Python!
                    </p>
                    <div className='vr'></div>
                    <div className='grid tech-wrapper grid-item-2'>
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/> 
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C"/>
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
                        <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/>
                    </div>
                </div>
            </div>
            <hr id='projects'></hr>
            <div id='projects-section' className='container'>
                <h1 className='underline header'>Projects</h1>
                { /*TODO: Make the project cards form a scrollable left-to-right list*/ }
                <div className='carousel inline-flex'>
                    <button className='button left-button'>&#10094;</button>
                    <div className='card-wrapper'>
                        <ProjectCard title='Sudoku Solver'
                        description='A solving algorithm for the popular Japanese puzzle game Sudoku! I took inspiration from the YouTube channel
                        "Computerphile", where they implemented something similar in Python. I wanted to rewrite it in C to see the perfomance
                        differences. My goal with the project is to now implement multithreading!'
                        techStack='C' link='https://www.google.com'/> 
                    </div>
                    <button className='button right-button'>&#10095;</button>
                </div>
            </div>
        </main>

        <footer className='flex centerH'>
            <p>Author: Aidan Farber</p>
            <p id='contact'>Contact: <a href="mailto:adevfarber@gmail.com">adevfarber@gmail.com</a></p>
            <a className='centerH' target='_blank' href='https://github.com/AidanFarber'><img src={github} alt="GitHub" /></a>
            <a className='centerH' target='_blank' href="https://www.linkedin.com/in/aidan-farber-109667162"><img src={linkedIn} alt="LinkedIn" /></a>
            <a className='centerH' target='_blank' href="https://www.instagram.com/aidan_farber"><img src={instagram} alt="Instagram"/></a>
        </footer>
    </div>
  )
}

export default App;
