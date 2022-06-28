import React from 'react';
import './blog.css';
import Card from '../../component/card/card';
import Arepa from '../../images/arepa.jpg';


const recetas = () => {
    const titleCard = 'La Receta Secreta de la Arepa'
    const textCard = 'Hazte millonario vendiendo arepas con langosta'
    const titleCard2 = 'La Receta de las Arepas Asadas uwu'
    const titleCard3 = 'La Receta de las Arepas A La Parrilla'
    const textButtonBlog = 'Leer Receta'
    return (
        <div className='container-blog'>
            <h1>Recetas</h1>
            <div className='card-sector'>
                <Card
                    img={Arepa}
                    text={titleCard}
                    info={textCard}
                    button={textButtonBlog}
                />
                <Card
                    img={Arepa}
                    text={titleCard2}
                    info={textCard}
                    button={textButtonBlog}
                />
                <Card
                    img={Arepa}
                    text={titleCard3}
                    info={textCard}
                    button={textButtonBlog}
                />
            </div>
        </div>
    );
}

export default recetas;
