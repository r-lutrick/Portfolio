import React from 'react'

const Intro = () => {
    return (
        <div className='p-3 bg-dark bg-opacity-50 rounded blur fade-in-2'>
            <div className="textBox">
                <h3 className='drop-in-top'>Welcome!</h3>
                <h1 className='fade-in-5 name'>my name is <span className='name'>Robert</span></h1>
                {/* <h5 className='drop-in-bottom'>I'm a Full Stack Developer who transforms ideas into reality. I believe in the power of merging technical skills with cognitive abilities like objective analysis and creative problem-solving to achieve great things.</h5> */}
                {/* <h5 className='drop-in-bottom'>I'm a full-stack developer with experience in creating responsive and dynamic web applications using various technologies such as JavaScript, React, Node.js, and MongoDB. I'm passionate about creating innovative and efficient solutions that exceed client expectations and drive business growth.</h5> */}
                <h5 className='drop-in-bottom'>I'm a full-stack developer who loves bringing ideas to life through responsive and dynamic web applications. With my expertise in technologies like JavaScript, React, Node.js, and MongoDB, I'm always excited to collaborate and create custom solutions that meet unique needs and goals.</h5>
            </div>
        </div>
    )
}

export default Intro;