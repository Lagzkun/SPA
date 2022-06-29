import React from 'react';
import './home.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Home = () => {
    const sliderInfo = [
        {"text": 'Slide 1', 'image':'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
        {"text": 'Slide 2', 'image': 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'},
        {"text": 'Slide 3', 'image': 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'},
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
