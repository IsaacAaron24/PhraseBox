import React from 'react';

const Button = ({changeQuote, randomColor}) => {
    return (
        <div className='Button-container'>
            <button onClick={changeQuote} className='button' style={{color: "#" + randomColor}}>
                <i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};

export default Button;