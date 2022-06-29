import React from 'react';
import './blog.css';
import Card from '../../component/card/card';
import ItemsFood from '../../Json/recetas.json';


const recetas = () => {
    return (
        <div className='container-blog'>
            <h1>Recetas</h1>
            <div className='card-sector'>
                {
                    ItemsFood.map((item,index) => (
                        <Card 
                        key={index}
                            img={item.img}
                            text={item.name}
                            info={item.info}
                            button={item.button}
                        />
                    )) 
                }
            </div>
        </div>
    );
}

export default recetas;
