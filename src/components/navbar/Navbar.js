import React from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => (
    <nav className={style.main_nav}>
        <ul className={style.nav_elements}>
            <li className={style.title}>{props.title}</li>
            <li className={style.nav_element}><a className={style.nav_link} href="/" >FOOD</a></li>
            <li className={style.nav_element}><a className={style.nav_link} href="/" >FRUITS</a></li>
            <li className={style.nav_element}><a className={style.nav_link} href="/" >VEGGIE</a></li>
            <li className={style.nav_element}><a className={style.nav_link} href="/" >SWEETS</a></li>
            <li className={style.nav_element}><a className={style.nav_link} href="/" >DRINKS</a></li>
        </ul>
    </nav>
)

export default Navbar