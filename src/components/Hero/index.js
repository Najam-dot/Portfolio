import React from 'react'
import styles from './Hero.module.css'
import Behance from '../../assets/images/behance.png'
import Dribble from '../../assets/images/dribbble.png'
import Instagram from '../../assets/images/instagram.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Pinterest from '../../assets/images/pinterest.png'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroWrap}>
          <h6>Hello, I am</h6>
          <h1>Mark</h1>
          <h1>Reccardo</h1>
          <p>
            A Young <span>UI/UX</span> designer with crazy for mobile & web
            design.
          </p>
          <h5>Find Me on</h5>
          <ul>
            <li>
              <a href="#">
                <img src={Behance} alt="Behance logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Dribble} alt="Dribble logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="ig logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={LinkedIn} alt="linked in logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Pinterest} alt="pintrest logo"></img>
              </a>
            </li>
          </ul>
          <div className={styles.ButtonsWrap}>
            <ul>
              <li>
                <a href="">Hire Me</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
