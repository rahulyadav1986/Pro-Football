import React from "react";
import styles from "./Topmatch.module.scss";
import Image from "next/image";
const TopMatchItem = ({item})=>{
    return(
        <>
            <div className={styles.image_wrapper}>
                <Image src={item.thumbnail} fill={true} alt="thumbnail" />
            </div>
            <div className={styles.details}>
                <div className={`${styles.compitition} d-flex align-items-center`}>  
                    <Image src="/images/trophy.png" className={styles.trophy} fill={true} alt="trophy" /> 
                    <h6>{item.competition.name}</h6>
                    
                </div>
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
        </>
    )
}

export default TopMatchItem;