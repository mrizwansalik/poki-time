import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    return ( 
      
        <div className='container'>
            <nav className='navbar navbar-light bg-gray'>
              <header className='navbar-brand'><h1>Json data</h1> </header>
              <div className=' nav-item d-flex '>
                  <span><Link to='/' className='nav-link '>Home</Link></span>
                  <span><NavLink to='/about' className='Nav-link '>About</NavLink></span>
                  <span><NavLink to='/contact' className='nav-link'>Contact</NavLink></span>
                  <span><NavLink to='/login' className='nav-link'>Login</NavLink></span>
                  
              </div>
            </nav> 
        </div>
       
     );
}
 
export default Navbar;