import React from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => (
    <nav className={style.main_nav}>
        <ul className={style.nav_elements}>
            <li className={props.active!=='all' ? style.title : style.title_filtered} onClick={props.onFilter} category="all">{props.title}</li>
            <li className={style.nav_element}><button className={props.active!=='food' ? style.nav_link : style.nav_link_filtered} onClick={props.onFilter} category="food">FOOD</button></li>
            <li className={style.nav_element}><button className={props.active!=='fruits' ? style.nav_link : style.nav_link_filtered} onClick={props.onFilter} category="fruits">FRUITS</button></li>
            <li className={style.nav_element}><button className={props.active!=='veggie' ? style.nav_link : style.nav_link_filtered} onClick={props.onFilter} category="veggie">VEGGIE</button></li>
            <li className={style.nav_element}><button className={props.active!=='sweets' ? style.nav_link : style.nav_link_filtered} onClick={props.onFilter} category="sweets">SWEETS</button></li>
            <li className={style.nav_element}><button className={props.active!=='drinks' ? style.nav_link : style.nav_link_filtered} onClick={props.onFilter} category="drinks">DRINKS</button></li>
        </ul>
    </nav>
)

export default Navbar