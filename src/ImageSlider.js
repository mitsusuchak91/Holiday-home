import React, {useState} from 'react';
import './ImageSlider.css';
import { SliderData } from './SliderData';
//import { AerrowCircleRight } from '@mui/icons-material';
//import { AerrowCircleLeft } from '@mui/icons-material';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState (0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className="left-aerrow" onClick={prevSlide} />;
            <FaArrowAltCircleRight className="right-aerrow" onClick={nextSlide} />;


           {SliderData.map((slide, index) => {
               return  (
                   <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                    >
                    {index === current && (
                        <img src={slide.image} alt='' className='image' />
                    )}
                    
                    </div>
               );
           })} 
        </section>
        )
    
    
}

export default ImageSlider;


{/*   return (
        <>
           {SliderData.map((slides, index) => {
               return <img src={slides.image} alt='' className='image' />;
           })
        }
        </>
    )   */}

    