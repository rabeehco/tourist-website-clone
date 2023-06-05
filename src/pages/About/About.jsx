import styles from './About.module.css'
import { AiFillCompass } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa';
import { BsFillUmbrellaFill } from 'react-icons/bs';
import { Button } from 'bootstrap';
const About = () => {
    return (
        <>
            <p className={styles.head}>About us</p>
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <h1> Explore all toure of the <br /> world with us.</h1>
                    <p>Lorem Ipsum available, but the majority have suffered alteration in <br />
                        some form, by injected humour, or randomised words which don't <br />look even slightly believable</p>

                    <div className={styles.nav}>
                        <AiFillCompass className={styles.icon} />
                        <h3>Toure Guid</h3>
                    </div>
                    <p>Lorem Ipsum available, but the majority have <br />suffered alteration in some.</p>

                    <div>
                        <h3><FaBriefcase className={styles.icon} /> {" "} Friendly price</h3>
                        <p>Lorem Ipsum available, but the majority have <br />suffered alteration in some.</p>
                    </div>
                    <div>
                        <h3><BsFillUmbrellaFill className={styles.icon} />Reliable tour</h3>
                        <p>Lorem Ipsum available, but the majority have <br />suffered alteration in some.</p>
                    </div> 

                    
                        <p> <AiFillCompass className={styles.icon} /> </p> 
                                            <p><FaBriefcase className={styles.icon} /></p>  
                   <p><BsFillUmbrellaFill className={styles.icon} /></p>
                    
                    <button type="button" class="btn btn btn-primary">Booking Now</button>
                </div>
                <div className={styles.righi_container}></div>
                <img src='https://codewithsadee.github.io/tourest/assets/images/about-banner.png' className={styles.img_container} />

            </div>

        </>
    )
}



export default About