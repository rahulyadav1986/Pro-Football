import React, { useState } from "react";
import styles from "./Login.module.scss";
const RegisterItem = ()=>{
    const [ClickPassword, SetClickPassword] = useState();
    const [ConfirmClickPassword, SetConfirmClickPassword] = useState();
    const SetPassword =()=>{
        SetClickPassword(!ClickPassword)
    }
    const ConfirmSetPassword =()=>{
        SetConfirmClickPassword(!ConfirmClickPassword)
    }
    return(
        <>
            <div className={styles.form}>
                <h2>Register</h2>
                <div>
                    <div className={styles.form_panel}>
                        <label htmlFor=""><span className={styles.red}>*</span> Your Name</label>
                        <div className={styles.form_control}>
                            <i class="fa-solid fa-envelope-circle-check"></i>
                            <input type="text" placeholder="Enter Your Name" className={styles.input} name="" id="" />
                        </div>
                        
                    </div>
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
                        <label htmlFor=""><span className={styles.red}>*</span> Confirm Your Password</label>
                        <div className={styles.form_control}>
                            <i class="fa-solid fa-unlock-keyhole"></i>
                            <input type={ConfirmClickPassword ? 'text' : 'password'} placeholder="Enter Your Password" className={styles.input} name="" id="" />
                            <i onClick={ConfirmSetPassword} class={`${styles.password} ${ConfirmClickPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} `} ></i>
                        </div>
                    </div>
                    <div className={styles.form_panel}>
                        <input type="submit" className="submit button" value="Register" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default RegisterItem;