import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from 'react'
const User = ({children})=>{
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

export default User;