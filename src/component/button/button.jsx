import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const navigate = useNavigate();
    const navigateButton = () => {
        navigate(props.navegateUrl);
    }
    return (
        <div>
            <button 
                className="buttonComponent"
                onClick={navigateButton} 
                >
                    {props.text}
            </button>
        </div>
    );
}

export default Button;
