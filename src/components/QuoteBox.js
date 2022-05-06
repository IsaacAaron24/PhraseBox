import React, { useState } from 'react';
import quotes from '../quotes.json'
import Button from './Button';

const QuoteBox = () => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const randomQuote = Math.floor(Math.random() * quotes.length)

    const [phrases, setPhrases] = useState(randomQuote)

    const changeUsers = () =>{
        const random = Math.floor(Math.random() * quotes.length);
        setPhrases(random)
    }
        
    
    document.body.style.backgroundColor = "#" + randomColor;
        
    return (
        <div className='Card' style={{color: "#" + randomColor}}>
            <p className='quote'> 
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                {quotes[phrases].quote}
            </p>
            <p className='author'><b>{quotes[phrases].author}</b></p>
            <Button changeQuote={changeUsers} randomColor={randomColor}/>
        </div>
    );
};

export default QuoteBox;