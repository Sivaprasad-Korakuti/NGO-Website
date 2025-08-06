import React from 'react';
import '../css/Slider.css';

const Slider = ({ images, direction }) => {
    const duplicatedImages = [...images, ...images];
    return (
        <div className="slider-cwrapper">
            <div className={`slider-container ${direction}`}>
                {duplicatedImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide${index}`}
                        className="slider-image"
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;