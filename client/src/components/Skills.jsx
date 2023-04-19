import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CarouselFunction from './ProjectCarousel';
import { SiPython, SiReact, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa'
import pythonRecipies from '../assets/images/python_recipies.gif'

const Skills = () => {
  let listItem = "list-group-item text-end bg-transparent text-white"
  let pythonCarousel = {title: 'Cook Book', text: 'Full CRUD application for keeping everyone\'s favorite recipe!'}

  const [key, setKey] = useState('python');

  const handleTabs = (k) => {
    return key ? 'text-black' : 'text-white'
  }

  return (
    <div className='p-3 bg-dark bg-opacity-50 rounded blur fade-in-2 w-100 text-center'>
      <h1><b>Stacks</b></h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => { setKey(k) }}
        className="mb-3"
        fill
      >
        <Tab eventKey="python" title="Python" tabClassName={key === 'python' ? 'text-black' : 'text-white'}>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className='text-start'><b>Python</b></h2>
            <h2><SiPython /></h2>
          </div>
          <hr />
          <div className="d-flex col">
            <div className='container col-3'>
              <h4 className='text-start'>Front-End</h4>
              <ul className='list-group'>
                <li className={listItem}>HTML</li>
                <li className={listItem}>CSS</li>
                <li className={listItem}>JavaScript</li>
              </ul>
              <h4 className='text-start'>Back-End</h4>
              <ul className='list-group'>
                <li className={listItem}>Python</li>
              </ul>
              <h4 className='text-start'>Database</h4>
              <ul className='list-group'>
                <li className={listItem}>MySQL</li>
              </ul>
              <h4 className='text-start'>Frameworks</h4>
              <ul className='list-group'>
                <li className={listItem}>Flask</li>
              </ul>
              <h4 className='text-start'>Libraries</h4>
              <ul className='list-group'>
                <li className={listItem}>Bootstrap</li>
              </ul>
            </div>
            <div className="container col-9">
              <h4>Projects</h4>
              <CarouselFunction image={pythonRecipies} captionTitle={pythonCarousel.title} captionText={pythonCarousel.text} />
            </div>
          </div>
        </Tab>
        <Tab eventKey="mern" title="MERN" tabClassName={key === 'mern' ? 'text-black' : 'text-white'}>
          <div className="d-flex align-items-center justify-content-between">
            <h2><b>MERN</b></h2>
            <h2><SiMongodb /> <SiExpress /> <SiReact /> <FaNodeJs /></h2>
          </div>
          <hr />
          <div className="d-flex col">
            <div className='container col-3'>
              <h4 className='text-start'>Front-End</h4>
              <ul className='list-group'>
                <li className={listItem}>React</li>
              </ul>
              <h4 className='text-start'>Back-End</h4>
              <ul className='list-group'>
                <li className={listItem}>Node.js</li>
                <li className={listItem}>Express</li>
                <li className={listItem}>REST API</li>
              </ul>
              <h4 className='text-start'>Database</h4>
              <ul className='list-group'>
                <li className={listItem}>MongoDB</li>
              </ul>
              <h4 className='text-start'>Libraries</h4>
              <ul className='list-group'>
                <li className={listItem}>Bootstrap</li>
                <li className={listItem}>Material UI</li>
              </ul>
            </div>
            <div className="container col-9">
              <h4>Projects</h4>
              <CarouselFunction />
            </div>
          </div>
        </Tab>
        <Tab eventKey="java" title="Java" tabClassName={key === 'java' ? 'text-black' : 'text-white'}>
          <div className="d-flex align-items-center justify-content-between">
            <h2><b>Java</b></h2>
            <h2><FaJava /> </h2>
          </div>
          <hr />
        </Tab>
      </Tabs>

    </div>
  )
}

export default Skills