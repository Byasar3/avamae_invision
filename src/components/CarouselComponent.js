import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
    
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules = {[Pagination]}
        pagination={{
            dynamicBullets:true,
            clickable:true,
        }}>
            {images.map(image => {
            return (
            <SwiperSlide key={image.id} className='CarouselSlides'>
                <div>
                    <img className='CarouselImages' src={image.ImageUrl} alt={image.Subtitle} />
                    <div className='CarouselText'>
                        <h1>{image.Title}</h1> <br/>
                        <h2>{image.Subtitle}</h2> <br/>
                        <Link to='/contact-us'><button className="CarouselButton">Contact Us</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            )})}
        </Swiper>
        );
    };

export default CarouselComponent;