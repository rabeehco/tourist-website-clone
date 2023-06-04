import styles from './Footer.module.css'
import { CiFacebook } from 'react-icons/ci'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'


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
                  <CiFacebook className={styles.icon} />
                  <AiFillTwitterCircle className={styles.icon} />
                  <AiOutlineInstagram className={styles.icon} />
                  <AiFillLinkedin className={styles.icon} />
                  <AiFillGoogleCircle className={styles.icon} />
                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
