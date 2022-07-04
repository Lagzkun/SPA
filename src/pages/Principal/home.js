import React from 'react';
import './home.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Home = () => {
    const sliderInfo = [
        {"text": 'Slide 1', 'image':'https://img.freepik.com/foto-gratis/plato-comida-dieta-ceto-tomates-cherry-pechuga-pollo-huevos-zanahoria-ensalada-rucula-espinacas-keto-almuerzo-vista-superior_2829-16946.jpg?t=st=1656878483~exp=1656879083~hmac=f4b41bd40e2290a4b0cbeb33ec76f0f949574e50fab869f46d3a34dc5a77517b&w=1380'},
        {"text": 'Slide 2', 'image': 'https://img.freepik.com/foto-gratis/espagueti-pesto-gambas-servido-plato_1220-3041.jpg?w=1380'},
        {"text": 'Slide 3', 'image': 'https://img.freepik.com/foto-gratis/falafel-hummus-pita-platos-oriente-medio-o-arabe-comida-halal-vista-superior-bandera_2829-14259.jpg?w=1380'},
    ];
    return (
        <div className='container-home'>
            <Slide>
             {
                sliderInfo.map((item,index) => (
                    <div className="each-slide-effect">
                        <div key={index} style={{ 'backgroundImage': `url(${item.image})` }}>
                            <span>{item.text}</span>
                        </div>
                    </div>
                ))
             }  
        </Slide>
        </div>
    );
}

export default Home;
