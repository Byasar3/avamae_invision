import { useEffect, useState } from "react";
import axios from "axios";

const CarouselContainer = () => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = () => {
            axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
            .then(response => {
                setImages(response.data.Details)
                
            })
        }
        fetchImages()
        console.log('Response:', response);
    }, [])

    const CarouselImages = images.map((image) => {
        return <CarouselComponent
        key={image.id}
        image={image}/>
    })

    return (
        <div>
            {CarouselImages}
        </div>
    )
}

export default CarouselContainer;