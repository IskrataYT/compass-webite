'use client';

import { useRef, useEffect } from 'react';
import Styles from './parallax.module.css'

const Parallax = () => {
    
    const textRef = useRef<HTMLHeadingElement>(null);
    const hill1Ref = useRef<HTMLImageElement>(null);
    const hill4Ref = useRef<HTMLImageElement>(null);
    const hill5Ref = useRef<HTMLImageElement>(null);
    const leafRef = useRef<HTMLImageElement>(null);

    const handleScroll = () => {
        if (window.scrollY < window.innerHeight && leafRef.current && textRef.current && hill4Ref.current && hill5Ref.current) {

            let value = window.scrollY;
            leafRef.current.style.top = value * -1.5 + "px";
            leafRef.current.style.left = value * 1.5 + "px";
            hill4Ref.current.style.left = value * -1.5 + "px";
            hill5Ref.current.style.left = value * 1.5 + "px";
            textRef.current.style.marginTop = value * 2.5 + "px";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className={Styles.parallax}>
            <img src='/hill1.png' onScroll={handleScroll} ref={hill1Ref}></img>
            <img src='/hill2.png'></img>
            <img src='/hill3.png'></img>
            <img src='/hill4.png' ref={hill4Ref}></img>
            <img src='/hill5.png' ref={hill5Ref}></img>
            <img src='/tree.png'></img>
            <h1 className={Styles.title + " font-sans"} ref={textRef}>True North</h1>
            <img src='/leaf.png' ref={leafRef}></img>
            <img src='/plant.png'></img>
        </section>
    )

}

export default Parallax;