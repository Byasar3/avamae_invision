import { Swiper, SwiperSlide } from 'swiper/react';


const CarouselComponent = ({image}) => {
    return (
        
        <Swiper
        params={{
            lazy: true,
            Pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true
            }
        }}
        >
            <SwiperSlide>
                    <img src={image.ImageURL} alt={image.Subtitle}/>
                    <div>
                        <h1>{image.Title}</h1>
                        <h2>{image.Subtitle}</h2>
                        <button>Contact Us</button>
                    </div>
                </SwiperSlide>
        </Swiper>
    )
}   

export default CarouselComponent;