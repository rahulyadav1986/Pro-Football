import React, { useState } from "react";
import Image from 'next/image';
import styles from "./Login.module.scss";
import LoginItem from "./LoginItem";
import RegisterItem from "./RegisterItem";
const Login = (props)=>{
    const [showLogin, SetShowLogin] = useState(true);
    const [LoginClick, SetLoginClick] = useState(true);
    const LoginOrRegister = ()=>{
        SetShowLogin(!showLogin)
    }
    
    
    return(
        <>            
            <div className={`${styles.login_wrapper} d-flex align-items-center justify-content-center`}>            
                <div className={`${styles.login_main_wrapper} d-flex jutsify-content-between`}>
                <div className="cross d-flex align-items-center justify-content-center" onClick={LoginClick}><i class="fa-solid fa-xmark"></i></div>
                    <div className={`${styles.login_avator} d-flex align-items-center justify-content-center`}>
                        <Image src="/images/login_avator.jpg" fill={true} alt="Login Avator"  />
                    </div>
                    <div className={`${styles.login_details}`}>
                        {
                            showLogin ? <LoginItem /> : <RegisterItem />
                        }
                        <div className={styles.register}>
                            {
                                showLogin ?
                                <p>Already have an account? <strong onClick={LoginOrRegister}>Register</strong></p>
                                :
                                <p>Already have Credentials? <strong onClick={LoginOrRegister}>Login</strong></p>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;