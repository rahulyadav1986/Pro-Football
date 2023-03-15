import Link from "next/link";
import * as moment from 'moment';
import React, { useEffect, useState } from "react";
import styles from "./Topmatch.module.scss";
import Image from "next/image";
import { SkelNewPost } from "@/components/Skeletons/Skeleton";
import { useRouter } from "next/router";
import TopMatchItem from "./TopMatchItem";
import MatchPopup from "./MatchPopup";
import { useSession, signIn } from "next-auth/react"
const TopMatch = ({Data})=>{
    const location = useRouter();
    const actualLocation = location.pathname;
    const [Loading, setLoading] = useState(false);
    const [clickPop, setClickPop] = useState(false);
    const {data:session} = useSession();
    const getPop = (i) => {
        setClickPop(i)
    }
    useEffect(()=>{
        setTimeout(() => setLoading(true), 3000);
    })
    const handleClickGithub = ()=>{
        signIn('Github', { callbackUrl: "http://localhost:3000/"})
    }
    return(        
        <>
            <div className={styles.topmatch_wrapper}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="heading_wrap d-flex align-items-center">
                        <Image src="/images/ball_vector.png" fill={true} />
                        <h2>Top <span>Matches</span></h2>
                    </div>
                    {
                        session ?
                        <Link href="/games" className="view_all_button d-flex align-items-center">View All <i className="fa-solid fa-arrow-right"></i></Link>
                        :
                        <p><strong  onClick={handleClickGithub}>Login</strong> to View All</p>
                    }
                    
                </div>                
                <div className={`${styles.container} container`}>
                    <div className={`${styles.match_grid_wrapper} d-flex justify-content-between flex-wrap`}>
                        {
                           actualLocation === '/' ?
                           Data.slice(0,12).map((item, i)=>{
                            return(
                                <>
                                    {
                                        !Loading ?
                                        <SkelNewPost />
                                        :
                                        <div className={`${styles.grid_item}`} onClick={() => getPop(i)}>
                                            <TopMatchItem key={i}  item={item} />
                                        </div>
                                    }
                                </>
                            )
                           }) 
                           :
                           Data.map((item, i)=>{
                            return(
                                <>
                                    {
                                        !Loading ?
                                        <SkelNewPost />
                                        :
                                        <div className={`${styles.grid_item}`} onClick={() => getPop(i)}>
                                            <TopMatchItem key={i} item={item} />
                                        </div>
                                    }
                                </>
                            )
                           }) 
                        }
                    </div>
                </div>
                {
                    Data.map((item,i)=>{
                        return(
                            <>
                                {
                                    clickPop === i ?
                                    <div onClick={() => getPop(!clickPop)} className={styles.pop_over_latest_video}>
                                        <MatchPopup key={i} item={item} />
                                    </div>
                                    :
                                    ""
                                }
                            </>
                            
                        )
                    }) 
                }
            </div>
        </>
    )
}

export default TopMatch;