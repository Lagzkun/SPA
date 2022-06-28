import React from 'react'
import './card.css'
import Button from '../button/button';

const Card = (props) => {
  return (
    <div className='menu-card'>
      <div className='food'>
        <img src={props.img} alt=""/>
      </div>
      <div className='card-body'>
        <div>
          <h1>{props.text}</h1>
        </div>
        <div>
          <p>{props.info}</p>
        </div>
        <div className='button-card'>
          <Button 
            text={props.button} 
          />
        </div>
      </div>
    </div>
  )
}

export default Card;