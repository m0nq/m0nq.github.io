import React from 'react';
import { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ContactContext } from '@contexts/Contact.context';

export const Banner = () => {
    const { setIsOpen } = useContext(ContactContext);

    return (
        <>
            <div className="banner-image">
                <StaticImage src="../../images/macbook-color.webp"
                    alt="Illuminated MacBook laptop"
                    style={{
                        bottom: 0,
                        height: '100%',
                        left: 0,
                        margin: 0,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        maxWidth: '100%',
                        padding: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '100%',
                        objectFit: 'cover'
                    }} />
            </div>
            <div className="banner-container">
                <div className="banner-content">
                    <h1>MONK WELLINGTON<span>.</span></h1>
                    <p>
                        Front-End Web Developer – React Specialist
                    </p>
                    <p>
                        Enhancing user journey's with code
                    </p>
                    <div className="banner-btn-container">
                        <button className="banner-button" onClick={() => setIsOpen(true)}>Get in touch!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

