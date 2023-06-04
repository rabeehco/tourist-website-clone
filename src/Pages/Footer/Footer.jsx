import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.footerBg}>
        <div className={styles.tst}>
          <div className={styles.container}>

            <div className={styles.footerTop}>

              <ul className={styles.footerList}>

                <li>
                  <p className={styles.footerListTitle}>Top destination</p>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Indonesia, Jakarta</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Maldives, Malé</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Australia, Canberra</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Thailand, Bangkok</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Morocco, Rabat</a>
                </li>

              </ul>

              <ul className={styles.footerList}>

                <li>
                  <p className={styles.footerListTitle}>Categories</p>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Travel</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Lifestyle</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Fashion</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Education</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Food &amp; Drink</a>
                </li>

              </ul>

              <ul className={styles.footerList}>

                <li>
                  <p className={styles.footerListTitle}>Quick links</p>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>About</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Contact</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Tours</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Booking</a>
                </li>

                <li>
                  <a href="#" className={styles.footerLink}>Terms &amp; Conditions</a>
                </li>

              </ul>

              <div className={styles.footerList}>

                <p className={styles.footerListTitle}>Get a newsletter</p>

                <p className={styles.newsletterText}>
                  For the latest deals and tips, travel no further than your inbox
                </p>

                <form action="" className={styles.newsletterForm}>
                  <input type="email" name="email" required="" placeholder="Email address" className={styles.newsletterInput} />

                  <button type="submit" className="btn btn-info">Subscribe</button>
                </form>

              </div>




            </div>
            <div className='icon'>

              <div className={styles.footerBottom}>

                <a href="#" className={styles.logo}>Tourest</a>

                <p className={styles.copyright}>
                  © 2022 <a href="#" className={styles.copyrightLink}>codewithsadee</a>. All Rights Reserved
                </p>

                <ul className="social-list">

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-google" role="img" className="md hydrated" aria-label="logo google"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
