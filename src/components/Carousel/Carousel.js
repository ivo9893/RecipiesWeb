import { useState, useRef } from "react";
import styles from './Carousel.css';


export default function Carousel({ images }) {
    const [index, setIndex] = useState(0);
    const startX = useRef(0);


    if (!images || images.length === 0) return null;


    const prev = () => {
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };


    const next = () => {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };


    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };


    const onTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;


        if (diff > 50) next();
        if (diff < -50) prev();
    };


    return (
        <div
            className="carousel"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="carousel slide"
                        className="carousel-image"
                    />
                ))}
            </div>


            <button className="carousel-btn left" onClick={prev}>
                ‹
            </button>
            <button className="carousel-btn right" onClick={next}>
                ›
            </button>
        </div>
    );
}