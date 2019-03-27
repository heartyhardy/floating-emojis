import React from 'react';
import styles from './Products.module.css';

const Products = (props) => (
    <div className={styles.main_view} hidden={!props.children}>
        {
            (!props.isLoading) ? props.children :
                (
                    <div className={styles.loading}>{props.loadingIcon}</div>
                )
        }
    </div>
)

export default Products