import React from 'react'
import styles from './About.module.css'
import AboutMeImage from '../../assets/images/AboutMe.png'

const About = () => {
  return (
    <div className={styles.About}>
      <div className="container">
        <div className={styles.AboutWrap}>
          <div className={styles.AboutText}>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              {' '}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="#">Download CV</a>
          </div>
          <div className={styles.AboutImage}>
            <a href="#">
              <img src={AboutMeImage} alt="about me img"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
