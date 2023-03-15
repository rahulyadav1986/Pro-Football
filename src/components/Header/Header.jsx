import Image from "next/image";
import Link from "next/link"
import styles  from './Header.module.scss';
import login_styles from "../Login/Login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../Login/Login";
import LoginItem from "../Login/LoginItem";
import RegisterItem from "../Login/RegisterItem";
import { useSession, signOut } from "next-auth/react"
const Header = ()=>{
    const router = useRouter();
    const [menu, setmenu] = useState(false);
    const [showLogin, SetShowLogin] = useState(true);
    const [LoginClick, SetLoginClick] = useState(false);
    const {data:session} = useSession();
    console.log(session)
    const [profile, setProfile] = useState(false)
    const LoginOrRegister = ()=>{
        SetShowLogin(!showLogin)
    }
    const menuToggle = () =>{
        setmenu(!menu)
        
    }
    const ClickLogin = ()=>{
        SetLoginClick(!LoginClick)
    }

    const ClickProfile = ()=>{
        setProfile(!profile)
    }

    const handleClickGithub = ()=>{
        signOut()
    }
   
    return(
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/images/logo.png" fill={true} alt="thumbnail" />
                        </Link>
                    </div>
                    <div className={menu ? `ovarlay open` : `ovarlay` } onClick={menuToggle}></div>
                    <div className="d-flex align-items-center">
                        <div onClick={menuToggle} className={`${styles.hamburger}  d-flex align-items-center justify-content-center`}><i class="fa-solid fa-bars"></i></div>
                        <div className="d-flex align-items-center justify-content-center">
                            <ul className={`${styles.menu_area} ${menu ? `${styles.menu_area} ${styles.open_menu} d-flex`: `${styles.menu_area} d-flex`}`}>
                                <li>
                                    <Link  onClick={menuToggle} href="/" className={router.pathname == "/" ? `${styles.active}` : ""}>Home</Link>
                                </li>
                                <li>
                                    <Link  onClick={menuToggle} href="/about-us" className={router.pathname == "/about-us" ? `${styles.active}` : ""}>About</Link>
                                </li>
                                {
                                    session ?
                                    <li>
                                    <   Link  onClick={menuToggle} href="/games" className={router.pathname == "/games" ? `${styles.active}` : ""}>Games</Link>
                                    </li>
                                    :
                                    ""
                                }
                                
                                <li>
                                    <Link onClick={menuToggle} href="/contact-us" className={router.pathname == "/contact-us" ? `${styles.active}` : ""}>Contact us</Link>
                                </li>
                            </ul>
                            {
                                session ?
                                <div className="button profile d-flex align-items-center justify-content-center" onClick={ClickProfile}>
                                    <i class="fa-solid fa-user"></i> Profile <i class="caret fa-solid fa-caret-down"></i>
                                    {
                                        profile ?
                                        <div className="drop_down_profile">
                                            <div className="propp d-flex align-items-center">
                                                <Image fill={true} src={session.user.image} alt="" />
                                                {session.user.name}
                                            </div>
                                            <ul className="details">
                                                <li className="d-flex align-items-center"><i class="fa-solid fa-envelope-circle-check"></i> {session.user.email}</li>
                                                <li className="d-flex align-items-center" onClick={handleClickGithub}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</li>
                                            </ul>
                                        </div>
                                        :
                                        ""
                                    }
                                    
                                </div>
                                
                                :
                                <div className="button d-flex align-items-center justify-content-center" onClick={ClickLogin}>
                                    <i class="fa-solid fa-user"></i> Login
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </header>  
            {
                LoginClick ? 
                <div className={`${login_styles.login_wrapper} d-flex align-items-center justify-content-center`}>  
                    <div className={LoginClick ? 'ovarlay_login open' : 'ovarlay_login'} onClick={ClickLogin}></div>          
                    <div className={`${login_styles.login_main_wrapper} d-flex jutsify-content-between`}>
                        <div className="cross d-flex align-items-center justify-content-center" onClick={ClickLogin}><i class="fa-solid fa-xmark"></i></div>
                        <div className={`${login_styles.login_avator} d-flex align-items-center justify-content-center`}>
                            <Image src="/images/login_avator.jpg" fill={true} alt="Login Avator"  />
                        </div>
                        <div className={`${login_styles.login_details}`}>
                            {
                                showLogin ? <LoginItem /> : <RegisterItem />
                            }
                            <div className={login_styles.register}>
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
                :
                ""
            }
             
        </>
    )
}

export default Header;