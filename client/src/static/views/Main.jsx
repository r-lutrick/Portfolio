import React, { /* useEffect, useState */ } from 'react'
import About from '../../components/About'
import Connect from '../../components/Connect'
import Intro from '../../components/Intro'
import Stacks from '../../components/Stacks'


const Main = () => {
    /* Change Background */
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
            <section id='about' className={`${appSection} align-items-start`}>
                <About />
            </section>
            <section id='skills' className={`${appSection} align-items-start half-view`}>
                <Stacks />
            </section>
            {/* <section id='project' className={`${appSection} align-items-start half-view`}>
                <Projects />
            </section> */}
            <section id='connect' className={`${appSection} align-items-start half-view`}>
                <Connect />
            </section>
        </div>
    )
}

export default Main
