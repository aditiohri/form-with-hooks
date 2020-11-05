import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function HeaderFooter({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}
