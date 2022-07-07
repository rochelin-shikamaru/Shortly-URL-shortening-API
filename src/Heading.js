import React, { useState } from 'react'
import logo from "../src/images/logo.svg";
import headingImage from "./images/illustration-working.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Heading = () => {

    const [isTrue, setIsTrue] = useState(true);

    const handleShowNav = () => {
        setIsTrue(!isTrue);
    }
  return (
    <div className='heading'>
        <header>
            <div className='heading__img'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={isTrue ? "heading__nav heading__nav__none" : "heading__nav heading__nav__show"}>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                    <li className='heading__nav__border'></li>
                </ul>
                <ul>
                    <li>Login</li>
                    <li className='heading__nav__sign'>Sign Up</li>
                </ul>
            </div>
            <div className='burger' onClick={handleShowNav}>
                <FontAwesomeIcon icon={isTrue ? faBars : faXmark} className="burger__icon" />
            </div>
        </header>
        <section className='heading__section'>
            <div className='justicier'>

                <div className='heading__section__shorter'>
                    <h1>More than just shorter links</h1>
                    <p>
                        Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <button className='button'>Get Started</button>
                </div>
            </div>
            <div className='heading__section__image'>
                <img src={headingImage} alt="img for header" />
            </div>
        </section>
    </div>
  )
}

export default Heading