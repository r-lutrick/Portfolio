import React, { /* useEffect, useState */ } from 'react'
import About from '../../components/About'
import Connect from '../../components/Connect'
import Intro from '../../components/Intro'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'


const Main = () => {
    /* This is used to change background */
    // const height = document.documentElement.clientHeight
    // const [backdrop, setBackdrop] = useState(lightBackdrop)
    // const [bgAttachment, setBgAttachment] = useState('fixed')
    // const changeBackground = () => {
    //     window.scrollY % height ? setBackdrop(darkBackdrop) : setBackdrop(lightBackdrop)
    // }
    // useEffect(() => {
    //     changeBackground();
    //     window.addEventListener("scroll", changeBackground)
    // })
    let appSection = `container container-fluid d-flex justify-content-center`
    return (
        <div className='container'>
            <section id='intro' className={`${appSection} align-items-center full-view`} >
                <Intro />
            </section>
            <section id='about' className={`${appSection} align-items-start half-view`}>
                <About />
            </section>
            <section id='skills' className={`${appSection} align-items-start half-view`}>
                <Skills />
            </section>
            <section id='project' className={`${appSection} align-items-start half-view`}>
                <Projects />
            </section>
            <section id='connect' className={`${appSection} align-items-start half-view`}>
                <Connect />
            </section>
        </div>
    )
}

export default Main
