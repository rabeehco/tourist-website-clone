import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Style.module.css';

function ShapeExample() {
  return (
    <Container>
      <Row className="mt-4">
        <div className="text-center">
          <h1 className={`${styles.heading1}`}>Destination</h1>
          <h1 className={`${styles.heading2}`}>Choose Your Place</h1>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <div className={`${styles.imageContainer}`}>
            <h3>Mali</h3>
            <h1>Maldives</h1>
            <Image
              src="https://codewithsadee.github.io/tourest/assets/images/destination-1.jpg"
              className={`w-100 ${styles.hoverEffect}`}
            />
          </div>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <div className={`${styles.imageContainer}`}>
            <h3>Bangkok</h3>
            <h1>Thailand</h1>
            <Image
              src="https://codewithsadee.github.io/tourest/assets/images/destination-2.jpg"
              rounded
              className={`w-100 ${styles.hoverEffect}`}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
          <div className={`${styles.imageContainer}`}>
            <h3>Kuala Lumpur</h3>
            <h1>Malaysia</h1>
            <Image
              src="https://codewithsadee.github.io/tourest/assets/images/destination-3.jpg"
              thumbnail
              className={`w-100 ${styles.hoverEffect}`}
            />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <div className={`${styles.imageContainer}`}>
            <h3>Kathmandu</h3>
            <h1>Nepal</h1>
            <Image
              src="https://codewithsadee.github.io/tourest/assets/images/destination-4.jpg"
              thumbnail
              className={`w-100 ${styles.hoverEffect}`}
            />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <div className={`${styles.imageContainer}`}>
            <h3>Jakarta</h3>
            <h1>Indonesia</h1>
            <Image
              src="https://codewithsadee.github.io/tourest/assets/images/destination-5.jpg"
              thumbnail
              className={`w-100 ${styles.hoverEffect}`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
