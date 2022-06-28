import React from 'react';
import './styleNav.css';
import Button from '../button/button';

const Nav = () => {
    const textButtonHome = 'Home'
    const textButtonRecetas = 'Recetas';
    const textButtonContacto = 'Contacto';

    return (
        <div className="nav">
            <Button 
                    text={textButtonHome}
                    navegateUrl={'/'}/>
            <ul>
                <li><Button 
                        text={textButtonRecetas}
                        navegateUrl={'/recetas'}/>
                </li>
                <li>
                    <Button  
                        text={textButtonContacto}
                        navegateUrl={'/contactos'}/>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
