import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

function Gallery() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
    ];

    return (
        <div className="flex flex-row justify-center flex-wrap">
            {images.map((eachImage, index) => (
                <img key={index} src={eachImage} alt={`Gallery Image ${index + 1}`} className='w-60 m-3 rounded-md hover:opacity-50 cursor-pointer'/>
            ))}
        </div>
    );
}

export default Gallery;
