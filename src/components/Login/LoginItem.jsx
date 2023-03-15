import React, { useState } from "react";
import Image from 'next/image';
import styles from "./Login.module.scss";
import { signIn, signOut } from "next-auth/react"
const LoginItem = ()=>{
    const [ClickPassword, SetClickPassword] = useState();
    const SetPassword =()=>{
        SetClickPassword(!ClickPassword)
    }
    const handleClickGithub = ()=>{
        signIn('Github',{ callbackUrl: "http://localhost:3000/"})
    }
    return(
        <>
            <div className={styles.form}>
                <h2>Login</h2>
                <div>
                    <div className={styles.form_panel}>
                        <label htmlFor=""><span className={styles.red}>*</span> Your Email</label>
                        <div className={styles.form_control}>
                            <i class="fa-solid fa-envelope-circle-check"></i>
                            <input type="email" placeholder="Enter Your Email" className={styles.input} name="" id="" />
                        </div>
                        
                    </div>
                    <div className={styles.form_panel}>
                        <label htmlFor=""><span className={styles.red}>*</span> Your Password</label>
                        <div className={styles.form_control}>
                            <i class="fa-solid fa-unlock-keyhole"></i>
                            <input type={ClickPassword ? 'text' : 'password'} placeholder="Enter Your Password" className={styles.input} name="" id="" />
                            <i onClick={SetPassword} class={`${styles.password} ${ClickPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} `} ></i>
                        </div>
                    </div>
                    <div className={styles.form_panel}>
                        <input type="submit" className="submit button" value="Login" />
                    </div>
                </div>
                
            </div>
            <div className="or d-flex align-items-center justify-content-start"><span>OR</span></div>
            <div className="d-flex align-items-center social_wrapper">
                <div className="button google d-flex align-items-center justify-content-center">
                    <Image src="/images/google_logo.png" fill={true} alt="Google Logo" />
                </div>
                <div className="button github d-flex align-items-center justify-content-center" onClick={handleClickGithub}>
                    <Image src="/images/github_logo.png" fill={true} alt="Google Logo" />
                </div>
            </div>
        </>
    )
}

export default LoginItem