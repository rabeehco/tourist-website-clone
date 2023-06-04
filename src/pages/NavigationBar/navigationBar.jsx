import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './navigation.module.css'

function NavigationBar() {
  return (
  
    <Navbar className={`${styles.navbar} pt-3 pb-3 `} >

  
      <Container fluid>
      <div className={`ms-5  ${styles.div1}`} ></div>
        <Navbar.Brand href="#" className={` ${styles.tourest} text-white ms-5 me-5`}>Tourest</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <div className={`${styles.div2} d-flex justify-content-evenly `}>
            <Nav.Link className={`${styles.texts} text-light `} href="#action1">Home</Nav.Link>
            <Nav.Link className={`${styles.texts} text-light`} href="#action2">About Us</Nav.Link>
            <Nav.Link className={`${styles.texts} text-light`}  href="#action2">Tours</Nav.Link>
            <Nav.Link className={`${styles.texts} text-light`}  href="#action2">Destinations</Nav.Link>
            <Nav.Link className={`${styles.texts} text-light`}  href="#action2">Blog</Nav.Link>
            <Nav.Link className={`${styles.texts} text-light`}  href="#" > Contact Us</Nav.Link>
            </div>
          </Nav>
          <Button variant="outline-light" className={`${styles.btn} me-5 `}>Booking Now</Button>
      <div className={`${styles.div3}`}></div> 
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavigationBar;