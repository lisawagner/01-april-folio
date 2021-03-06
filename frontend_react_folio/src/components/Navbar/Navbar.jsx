import React, { useState } from 'react'
import { HiMenuAlt4, HiX, HiCode } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

// TODO: connect links array to CMS, make variables


const Navbar = () => {
  //set up toggle state
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <HiCode />
      </div>

      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          // Map the array and use an IIFE - Immediately Invoked Function Expression
          // to return the correct list item
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {/* dynamic code block: */}
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  // Map the array and use an IIFE - Immediately Invoked Function Expression
                  // to return the correct list item
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar