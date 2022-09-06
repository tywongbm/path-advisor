import React, { Component } from 'react';

/* import { FadeTransform, Fade, Stagger } from 'react-animation-components'; */

import styles from './HomeComponent.module.css'

class Home extends Component
{
    state = {
        current: 1,
        mobileIndex: 1,
        websiteIndex: 1
    }
    tabFn(index) {
        this.setState({
            current: index
        })
    }
    mobileFn(index) {
        this.setState({
            mobileIndex: index
        })
    }
    websiteFn(index) {
        this.setState({
            websiteIndex: index
        })
    }
    render()
    {
        return(
            <>
            <div className={styles.tabWarp} id="FEATURES">
                <ul className={styles.tabHead}>
                    <li className={this.state.current==1?styles.active:''}  onClick={() => { this.tabFn(1) }}>Mobile</li>
                    <li className={this.state.current==2?styles.active:''}  onClick={() => { this.tabFn(2) }}>Website</li>
                </ul>
                <div className={styles.tabBody}>
                    <div className={[`${styles.bodyItem}`,`${styles.mobileBox}`].join(' ')} style={{'display':this.state.current==1?'flex':'none'}}>
                        <ul className={styles.bodyTab}>
                            <li  className={this.state.mobileIndex==1?styles.active:''} onClick={() => { this.mobileFn(1) }}><span>Find Location</span></li>
                            <li  className={this.state.mobileIndex==2?styles.active:''} onClick={() => { this.mobileFn(2) }}><span>Find Pathway</span ></li>
                            <li  className={this.state.mobileIndex==3?styles.active:''} onClick={() => { this.mobileFn(3) }}><span>Find Pathway</span > </li>
                        </ul>
                        <div className={[`${styles.mobileItem}`,`${this.state.mobileIndex==1?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_mobile.png" alt='' />
                            <h6>Find location</h6>
                            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                        </div>
                        <div className={[`${styles.mobileItem}`,`${this.state.mobileIndex==2?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_mobile.png" />
                            <h6>Find Path way</h6>
                            <p>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
                        </div>
                        <div className={[`${styles.mobileItem}`,`${this.state.mobileIndex==3?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_mobile.png" />
                            <h6>Find Pathway</h6>
                            <p>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
                        </div>
                    </div>
                    <div className={[`${styles.bodyItem}`,`${styles.WebsiteBox}`].join(' ')}  style={{'display':this.state.current==2?'flex':'none'}}>
                         <ul className={styles.bodyTab}>
                            <li  className={this.state.websiteIndex==1?styles.active:''} onClick={() => { this.websiteFn(1) }}><span>Find Location</span></li>
                            <li  className={this.state.websiteIndex==2?styles.active:''} onClick={() => { this.websiteFn(2) }}><span>Find Pathway</span ></li>
                            <li  className={this.state.websiteIndex==3?styles.active:''} onClick={() => { this.websiteFn(3) }}><span>Find Pathway</span > </li>
                        </ul>
                        <div className={[`${styles.WebsiteItem}`,`${this.state.websiteIndex==1?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_webpage.png" />
                            <h6>Find location</h6>
                            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                        </div>
                        <div className={[`${styles.WebsiteItem}`,`${this.state.websiteIndex==2?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_webpage.png" />
                            <h6>Find Pathway</h6>
                            <p>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
                        </div>
                        <div className={[`${styles.WebsiteItem}`,`${this.state.websiteIndex==3?styles.show:''}`].join(' ')} >
                            <img src="assets/pathadvisor_webpage.png" />
                            <h6>Find Pathway</h6>
                            <p>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviews s */}
            <div className={styles.reviewsWrap} id="FEATURES">
                <h3 class="public-title">
                    <span>Reviews</span>
                </h3>
                
                <div className={styles.reviewsBox} >
                    <div className={styles.reviewsItem} >
                        <h4>Jacky</h4>
                        <div  className={styles.reviewsText}>
                            Path advisor really good! <br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXX.
                        </div>
                    </div>
                    <div className={styles.reviewsItem} >
                        <h4>Jacky</h4>
                        <div  className={styles.reviewsText}>
                            Path advisor really good! <br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
                        </div>
                    </div>
                    <div className={styles.reviewsItem} >
                        <h4>Jacky</h4>
                        <div  className={styles.reviewsText}>
                            Path advisor really good! <br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </div>
                    </div>
                    <div className={styles.reviewsItem} >
                        <h4>Jacky</h4>
                        <div  className={styles.reviewsText}>
                            Path advisor really good! <br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </div>
                    </div>
                    <div className={styles.reviewsItem} >
                        <h4>Jacky</h4>
                        <div  className={styles.reviewsText}>
                            Path advisor really good! <br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.<br></br>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviews e  */}
            {/* ourstory s  */}
            <div className={styles.storyWrap} id="OURSTORY">
                <h3 class="public-title">
                    <span>Our Story</span>
                </h3>
                <div className={styles.storyText}>
                    Started in 2015,USThing is a student-developed, alH-in-one mobile app that aims at providing a more convenient access to 1Tservices offered by The Hong Kong University of Science and Technology (HKUST) for all tudents. The app helps students easilyaccess HKUST systems such as Facilities Booking System (FBS),Student Information System(SIS),L.ibrary Room Bookingsystem and the Career Center Job Board, and provides tools that facilitate students'learning experiences including next lessonnotification, calculation of GPA goals, Common Core course search and matching of students' timetables to find common timeslots for group projects and meetings. New functions are added from time to time to ensure the app provides an all-roundexperience that meets the students' needs. In August 2016, USThing began its collaboration with HKUST and its internal units toensure the app provides the best user experience for all students, in the hopes of ultimately expanding the services to the entireHKUST community. lf you have any ideas for the app, feel free to contact us at
    
                </div>
                <ul  className={styles.storyImg}>
                    <li>
                         <img src="assets/pathadvisor_webpage.png" />
                    </li>
                    <li>
                            <img src="assets/pathadvisor_webpage.png" />
                    </li>
                </ul>
            </div>
            {/* ourstory e  */}
            {/* ourteam s */}
            <div className={styles.teamWrap} id="OURTEAM">
                <h3 class="public-title">
                    <span>Our Team</span>
                </h3>
                <div className={styles.teamText}>
                    The USThing Team is made up of passionate and talernted students who work towards the continual betterment of the app andthe HKUST student community. Our members are studying different majors, in different levels and years of study, and havedifferent strengths and personalities, but we all share the same vision - to make contrbution to HKUST in our own ways byenhancing the campus experience through USThing.Our team operates independently and provides members with theopportunity to work in a start-up like envlronment and gain hands-on experience with the latest technologles.We value andrespect our members and believes in a flexible and frendly team culture.We welcome any interested students to join ourrmission in buililding a better and smarter carmpus. lf you are interested in joining our team, send your Cl to
                </div>
            </div>
            
            </>
        );
    }
}

export default Home;