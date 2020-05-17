import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <ul>
                <Link to='/'>Take me to home page</Link>
            </ul>
        </div>
    );
}