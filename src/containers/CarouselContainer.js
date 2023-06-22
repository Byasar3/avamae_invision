import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const CarouselContainer = () => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
        }).then(response => {
            setImages(response.data.Details)
        })
    }, []);
    
      console.log('Images:', images);
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules = {[Pagination]}
        pagination={{
            dynamicBullets:true,
            clickable:true,
        }}
        
        >
            {images.map(image => {
            return (
            <SwiperSlide key={image.id} className='CarouselSlides'>
                <div>
                    <img className='CarouselImages' src={image.ImageUrl} alt={image.Subtitle} />
                    <h1>{image.Title}</h1>
                    <h2>{image.Subtitle}</h2>
                    <Link to='/contact-us'><button>Contact Us</button></Link>
                </div>
    
            </SwiperSlide>
            );
})}
        </Swiper>
        
    );

};

export default CarouselContainer;