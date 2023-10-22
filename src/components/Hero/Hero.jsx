import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'


const Hero = () => {

    return (
        <div className='hero'>
        <div className="blur hero-blur"></div>
            <div className='left'>
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{left:'238px'}}
                        whileInView={{left:'10px'}}
                        transition={{type: 'spring tween', duration :3}}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>


                <div className="hero-text">
                    <div><span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span></div>
                    <div><span>
                        IDEAL BODY
                    </span></div>
                    <div><span>
                        In here we'll help you to shape and build your ideal body
                        and live up your life to fullest
                    </span></div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={100} start={75} delay='4' preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={798} start={698} delay='5' preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={20} start={5} delay='2' preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>

            <div className='right'>
                <button className="btn">Join Now</button>

                <motion.div className="heart-rate"
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={{type: 'spring ', duration :3}}>
                    <img src={Heart} alt="heart-rt" />
                    <span>Heart Rate</span>
                    <span>120  bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                
                <motion.div className="calories"
                initial={{right:'38rem'}}
                    whileInView={{right:'34rem'}}
                    transition={{type: 'spring ', duration :3}}>
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero