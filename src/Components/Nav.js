import { getByDisplayValue } from '@testing-library/dom';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px',
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <div>
                    <Link to="/">
                        <img style={{ height: 40 }} src="/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <ul className="flex items-center">
                    <li ><Link to="/">Home</Link></li>
                    <li className='ml-6'><Link to="/products">Products</Link></li>
                    <li className='ml-6'>
                        <Link to="/Cart">
                            <div style={cartStyle}>
                                <span className="text-white">10</span>
                                <img className="ml-2" src="./Images/cart.png" alt="Cart" />
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>

        </>
    )
}

export default Nav;
