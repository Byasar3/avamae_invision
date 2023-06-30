import CarouselComponent from "../components/CarouselComponent"
import OfficePhoto from "../Resources/shutterstock_696636346.jpg"
const Home = () => {
    return (
        <div className="Home">
            <CarouselComponent/>
            <div>
                <div className="HomePartTwo">
                    part 2:
                    <img src={OfficePhoto} alt="office space" className="HomePartTwoPhoto"/>
                    image of office on RHS
                    text on LHS with non functioning 'learn more' button
                </div>
                <div>
                    part 3:
                    image filling up full block
                    darker grey box on image with text
                    non functioning 'log in' button
                </div>
                <div>
                    part 4:
                    white background with column text
                    functioning contact us button
                </div>
            </div>
        </div>
    )
}

export default Home;
