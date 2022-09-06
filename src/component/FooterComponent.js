import React, { Component } from 'react';
import styles from './FooterComponent.module.css'
class Footer extends Component
{
    render()
    {
        return(
            <div className={styles.downloadWrap} id="DOWNLOAD">
                <h3 className="public-title"><span>Download</span></h3>
                <div className={styles.downloadBtn}>
                    <span>Android</span>
                    <span>IOS</span>
                </div>
                <p>2022 Path Advisor.All Rights Reserved.</p>
                <p>Screenshot by <span>ShotBot</span></p>
                <p>Device Mockup by <span>MockUPhone</span></p>
            </div>
        );
    }
}

export default Footer;