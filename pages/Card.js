import styles from './Card.module.scss';

const Card = (props) =>  (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src="/static/juice.jpg" alt="Avatar" className={styles.cardImage} />
        <div className="container">
          <h3>Vitamin Juice <span className={styles.price}>$24.99</span></h3>
          <p>Need a jump on your vitamins while drinking? Tired of popping the pills? 
            Drink our vitamin enhanced juice, available in several flavours.</p>
        </div>
      </div>
    </div>
);

export default Card;
