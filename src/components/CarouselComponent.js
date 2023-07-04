import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import 'swiper/css'

const CarouselComponent = () => {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
        }).then(response => {
            setImages(response.data.Details)
        }).catch (error => {
            console.log(error)
        })
    }, [])

    return (
        <Swiper
        onSlideChange = {() => console.log('slide change')}
        onSwiper = {(swiper) => console.log(swiper)}
        modules = {[Pagination, Navigation]}
        slidesPerView = {1}
        spaceBetween = {50}
        pagination = {{
            dynamicBullets:true,
            clickable:true,
        }}
        navigation = {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        >
            {images.map(image => {
            return (
            <SwiperSlide key={image.id} className='CarouselSlides'>
                <div>
                    <img className='CarouselImages' src={image.ImageUrl} alt={image.Subtitle}  loading="lazy"/>
                    <div className='CarouselText'>
                        <h1>{image.Title}</h1> <br/>
                        <h2>{image.Subtitle}</h2> <br/>
                        <button className="CarouselButton"><Link to='/contact-us'>Contact Us</Link></button>
                    </div>
                    <div class="swiper-lazy-preloader"></div>                
                    <div className="swiper-button-next"></div> 
                    <div className="swiper-button-prev"></div>
                </div>
            </SwiperSlide>
            )})}
        </Swiper>
        )
    }

export default CarouselComponent;