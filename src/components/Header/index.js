import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/images/logo.png'
const Header = () => {
  const [toogle, setToggle] = useState('')
  const [menu, setMenu] = useState('')
  const toogleMenu = () => {
    setToggle(toogle === '' ? 'on' : '')
    setMenu(menu === '' ? 'show' : '')
  }
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderWrap}>
          <div className={styles.logo}>
            <a href="#">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>

          <div onClick={toogleMenu} id={styles.toggle} className={`${toogle}`}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <ul className={`${menu}`}>
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#"> Portfolio</a>
            </li>
            <li>
              <a href="#"> Contact</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
