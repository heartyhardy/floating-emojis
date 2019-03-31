import React from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => (
    <nav className={style.main_nav}>
        <ul className={style.nav_elements}>
            <li className={style.title} onClick={props.onFilter} category="all">{props.title}</li>
            <li className={style.nav_element}><button className={style.nav_link} onClick={props.onFilter} category="food">FOOD</button></li>
            <li className={style.nav_element}><button className={style.nav_link} onClick={props.onFilter} category="fruits">FRUITS</button></li>
            <li className={style.nav_element}><button className={style.nav_link}>VEGGIE</button></li>
            <li className={style.nav_element}><button className={style.nav_link}>SWEETS</button></li>
            <li className={style.nav_element}><button className={style.nav_link}>DRINKS</button></li>
        </ul>
    </nav>
)

export default Navbar