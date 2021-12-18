import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function Home() {

    return (
        <div className='homeContainer'>
            <div className='backgroundImageContainer'>
                <h2>Your favorite food, delivered while coding</h2>
                <Link to='/pizza' id='order-pizza'>
                    <button className='pizza' id='pizza-button'>
                    Git Some Pizza
                    </button>
                </Link>
            </div>
            
        </div>
    )
}
