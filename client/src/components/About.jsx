import React from 'react'
import portrait from '../assets/images/professionalPicture.PNG'

const About = () => {
    return (
        /* 
        <div className='p-3 bg-dark bg-opacity-50 rounded blur fade-in-2'>
            <div className="textBox">
                <h3 className='drop-in-top'>Hello,</h3>
                <h1 className='fade-in-3 name'>my name is <b>Robert</b>.</h1>
                <h5 className='drop-in-bottom'>I'm a full-stack developer who loves bringing ideas to life through responsive and dynamic web applications. With my expertise in technologies like JavaScript, React, Node.js, and MongoDB, I'm always excited to collaborate and create custom solutions that meet unique needs and goals.</h5>
            </div>
        </div> 
        */
        <div className="p-3 bg-dark bg-opacity-50 rounded blur fade-in-2">
            <div className="portrait d-flex align-items-center col">
                <div className='col-7'>
                    <p style={{ textIndent: "25px" }}>
                        I have a huge passion for creating seamless digital experiences. My focus is on integrating great design and user experience into every project I work on.
                        I've always loved tinkering with technology and finding ways to make it more accessible and user-friendly. That's what drew me to software development in the first place, and it's what continues to inspire me today.
                    </p>
                    <p style={{ textIndent: "25px" }}>
                        When I'm not coding, you can usually find me exploring new hiking trails, trying out new recipes in the kitchen, or making terrible puns (sorry in advance!). Speaking of which, why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!
                    </p>
                    <p style={{ textIndent: "25px" }}>
                        But seriously, I'm passionate about creating software that not only works well, but also delights and empowers users. Whether it's a sleek new mobile app or a complex web platform, I strive to deliver digital experiences that make people's lives easier and more enjoyable.
                    </p>
                    <p style={{ textIndent: "25px" }}>
                        Thanks for stopping by, and feel free to get in touch if you have any questions or want to chat about your next project!
                    </p>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                    <img src={portrait} alt="portait" className='w-100 rounded-circle grow-in' style={{}} />
                </div>
            </div>
        </div>
    )
}

export default About