import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'
const Guest = ({children})=>{
    return(
        <>
            <div className="layout" >
                <Header />
                <div className="main">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Guest;