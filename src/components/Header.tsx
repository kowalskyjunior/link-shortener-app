import './Header.css'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.svg'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>{
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }


    return (
        <header>
            <nav className='container'>

                <div className="logo">
                    <img className='logo-img' src={logo} alt="Logo" />
                    <ul className='features-btn'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>

                </div>

                <div className="hamburger-mobile" onClick={handleMenu} ><GiHamburgerMenu /></div>

                <div className="login-header">
                    <button className='btn-login'>Login</button>
                    <button className='btn-sign-up'>Sign Up</button>
                </div>

            </nav>
            <div className="container-mobile">

            
            <div style={{display: isOpen ? 'flex' : 'none'}} className="mobile-wraper" id='mobile-wraper'>
                <div className="mobile-p">
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>
                <div className="line-mobile"></div>
                <div className="mobile-btn">
                    <button className='btn-login-mobile'>Login</button>
                    <button className='btn-sign-up-mobile'>Sign Up</button>
                </div>
            </div>
            {isOpen && <div className="overlay" onClick={handleCloseMenu}></div>}
            
             </div>
        </header>
    )
}

export default Header