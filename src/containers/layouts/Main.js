import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer';

const Main = ({children, routes}) => {
    return (
        <div className="bg-greyDark dark:bg-greyLighter">
            <Navbar routes={routes} />
            {children}
            <Footer routes={routes} />
        </div>
    )
}

export default Main
