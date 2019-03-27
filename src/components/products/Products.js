import React from 'react';
import styles from './Products.module.css';

const Products = (props) => (
    <div className={styles.main_view} hidden={!props.children}>
        {props.children}
    </div>
)

export default Products