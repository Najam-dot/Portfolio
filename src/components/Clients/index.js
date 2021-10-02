import React, { useState } from 'react'
import styles from './Clients.module.css'
import Client1 from '../../assets/images/Client1.png'
import Client2 from '../../assets/images/Client2.png'
import Client3 from '../../assets/images/Client3.png'

const Clients = () => {
  return (
    <section className={styles.client}>
      <div className="container">
        <div className={styles.client_txt}>
          <h1>What My Client Says</h1>
          <div className={styles.client_line}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={styles.client_portfolio}>
          <div className={styles.client_imgs}>
            <img src={Client2} alt="Client1" className={styles.FirstImage} />
            <img src={Client3} alt="Client2" className={styles.SecImage} />
            <img src={Client1} alt="Client3" className={styles.ThirdImage} />
            <img src={Client1} alt="Client4" className={styles.FourthImage} />
            <img src={Client2} alt="Client5" className={styles.FifthImage} />
            <img src={Client3} alt="Client6" className={styles.SixthImage} />
          </div>
          <div className={styles.client_data}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt is the most explicabo.{' '}
            </p>
            <h3>Sara Smith</h3>
            <h5>CEO ABC Company</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
