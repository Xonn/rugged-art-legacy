import React from 'react'

const Homepage = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    return (
        <>
            <h1>Homepage</h1>
        </>
    )
}

export default Homepage
