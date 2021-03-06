import React from 'react';
import styles from './Product.module.css';

const Product = (props) => (
    <div className={styles.outer_container}>
        <div className={styles.main_container}>
            <span
                className={styles.floating_emoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
            <span className={styles.emoji_trial}>𓃑</span>
        </div>
        <div className={styles.caption}>
            <p>{props.label}</p>
        </div>
    </div>
)

export default Product