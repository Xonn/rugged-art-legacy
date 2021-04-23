import React from 'react'

const Contact = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    return (
        <>
            <h1>Contact</h1>
        </>
    )
}

export default Contact
