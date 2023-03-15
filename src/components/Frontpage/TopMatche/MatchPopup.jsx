import React from "react";
import styles from "./Topmatch.module.scss";
import Image from "next/image";
const MatchPopup = ({item})=>{
    return(
        <>
            <div className={styles.inner_pop}>
                <div className={`${styles.compitition} d-flex align-items-center`}>                                                  
                    <Image src="/images/trophy.png" className={styles.trophy} fill={true} alt="trophy"  /> 
                    <div>
                        <h6>Competititon Name</h6>
                        <h2>{item.competition.name}</h2>
                    </div>                                          
                    
                </div>
                <div className={`${styles.main_details} d-flex justify-content-between`}>
                    <div className={styles.video_wrapper}>
                        {
                            item.videos.map((vidItem,i)=>{
                                return(
                                    <div className={styles.videos}>
                                        <div className={styles.main_video} key={i} dangerouslySetInnerHTML={{__html: vidItem.embed}}></div>
                                    </div>
                                )
                            })
                        } 
                        <ul className={`${styles.team_match} d-flex align-itms-center justify-content-between`}>                       
                            <li className="d-flex align-items-center">
                                <Image src="/images/ball.png" fill={true} alt="ball" />                             
                                <h3>{item.side1.name}</h3>
                            </li>
                            <li className={`${styles.versus} d-flex align-items-center`}>VS</li>
                            <li className="d-flex align-items-center">
                                <Image src="/images/ball.png" fill={true} alt="ball" />                         
                                <h3>{item.side2.name}</h3>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                
                
            </div>
        </>
    )
}

export default MatchPopup;