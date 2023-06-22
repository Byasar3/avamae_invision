import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const CarouselContainer = () => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
        }).then(response => {
            setImages(response.data.Details)
        })
    }, [])

    console.log('Hello from the container:', images);

    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map(image => (
            <SwiperSlide key={image.id}>
                <img className='CarouselImages' src={image.ImageURL} alt={image.Subtitle} />
                <div>
                    <h1>{image.Title}</h1>
                    <h2>{image.Subtitle}</h2>
                    <button>Contact Us</button>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CarouselContainer;