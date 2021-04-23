import React from 'react';

const About = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
    
    return (
        <>
            <h1>À propos</h1>
        </>
    )
}

export default About
