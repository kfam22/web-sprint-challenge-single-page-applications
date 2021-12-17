import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import pizza from '../Assets/Pizza.jpg'

export default function Home() {

    return (
        <div className='homeContainer'>
            <div className='backgroundImageContainer'>
                <Link to='/pizza' id='order-pizza'>
                    <button id='pizza-button'>
                    Build a Pizza
                    </button>
                </Link>
            </div>
            
        </div>
    )
}
