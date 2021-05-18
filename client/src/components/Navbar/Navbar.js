import React,  {Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h4 className="navbar-logo">WeCycle</h4>
                <div className="menu-icon">

                </div>
                <ul> {MenuItems.map((item, index) => { 
                        return (
                            <li class="navItems"  key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                </li>
                        )
                        })}
                </ul>
            </nav>
        )
    }
}


export default Navbar