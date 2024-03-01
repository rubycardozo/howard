

import { Carousel } from "@material-tailwind/react";
import sitting from './components/Images/sitting.png'
import intro from './components/Images/intro.png'
import profile from './components/Images/profile.png'
import { useState, useEffect } from "react";

import React from "react";




export default function Carousely() {


    const images = [intro, sitting, profile]
    const texts = ["A lawyer who cares. Don't mistake his kindness for weakness.", "He's worked his way through debt. Depression. His marriage falling apart. But he always lands on his feet.", "-Howard Hamlin"]
    const heads = ["HOWARD HAMLIN: \n Attorney at law", "A Divorced Insomniac: He gets it.", '"So, have you thought any more about the job?"']
    const [index, setIndex] = useState(0)
    const [Image, setImage] = useState(images[index])
    const [opacity, setOpacity] = useState(100)
    const [text, setText] = useState(texts[index])
    const [head, setHead] = useState(heads[index])

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
        setText(texts[index])
        setHead(heads[index])
        setOpacity(100)

        return () => clearTimeout(timer);

    }, [index]);



    return (
        <div>
            <div className="text">
                <h2>{head}</h2>
                <p> {text}</p>
            </div>

            <img
                src={Image}
                className="carousel black"
                style={{ opacity: opacity }}

            />


        </div >



    );
}