import React from 'react';
import styles from './blogs.module.css';
import Card from 'react-bootstrap/Card';
import { RxTimer } from 'react-icons/rx';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const cardDetails = [
  {
    cardText1: "A good traveler has no fixed plans and is not intent on arriving.",
    cardText2: "Kuala Lumpur, Malaysia",
    image : "https://codewithsadee.github.io/tourest/assets/images/popular-1.jpg"
  },
  {
    cardText1: "A good traveler has no fixed plans and is not intent on arriving.",
    cardText2: "Kuala Lumpur, Malaysia",
    image: "https://codewithsadee.github.io/tourest/assets/images/popular-2.jpg"
  },
  {
    cardText1: "A good traveler has no fixed plans and is not intent on arriving.",
    cardText2: "Kuala Lumpur, Malaysia",
    image : "https://codewithsadee.github.io/tourest/assets/images/popular-3.jpg"
  }
];

const Blogs = () => {
  return (
    <div className='{blog-post}'>
      <h1 className={`${styles.subHeading} d-flex justify-content-center m-3 mt-5`}> Featured tours </h1>
      <h1 className={`${styles.mainHeading} d-flex justify-content-center m-3 `}>Most popular Tours</h1>
<div className='d-flex justify-content-center'>
<div className='row gap-4'>
      {cardDetails.map((item, index) => (
        <Card
          key={index}
          className={` p-3 mb-5 ${styles.cards} `} 
          style={{ width: '21rem' }}
        >
          <div className={styles.overlayBox}>
            <div className={`${styles.timer}`}>
              <RxTimer />
            </div>
            <p className={styles.days}>12 days</p>
          </div>
          <Card.Img
            className={`${styles.cardImage}`}
            variant="top"
            src={item.image}
          />
          <Card.Body>
            <div className={styles.from}>From $50.00</div>
            <div className={styles.rating}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />(2)
            </div>
            <Card.Text className='mt-4'>
              <strong>{item.cardText1}</strong>
            </Card.Text>
            <Card.Text>
              <strong>{item.cardText2}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div></div></div>
  );
};

export default Blogs;
