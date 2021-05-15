import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer';

const Main = ({children, routes}) => {
    return (
        <>
            <Navbar routes={routes} />
            {children}
            <Footer routes={routes} />
        </>
    )
}

export default Main
