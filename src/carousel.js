

import { Carousel } from "@material-tailwind/react";
import sitting from './components/Images/sitting.png'
import intro from './components/Images/intro.png'
import profile from './components/Images/profile.png'
import { useState, useEffect } from "react";

import React from "react";




export default function Carousely() {


    const images = [intro, sitting, profile]
    const [index, setIndex] = useState(0)
    const [Image, setImage] = useState(images[index])
    const [opacity, setOpacity] = useState(100)
    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval); // Clear the interval when the component unmounts or the dependency changes
    }, []);

    useEffect(() => {
        const fade = () => {
            setOpacity(0)
        }
        const timer = setTimeout(fade, 6000)
        setImage(images[index])
        setOpacity(100)

        return () => clearTimeout(timer);

    }, [index]);



    return (
        <div>
            <img
                src={Image}
                className="carousel black"
                style={{ opacity: opacity }}

            />
        </div >



    );
}