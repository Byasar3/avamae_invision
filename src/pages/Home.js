import CarouselComponent from "../components/CarouselComponent"
import OfficePhoto from "../Resources/shutterstock_696636415.jpg"
const Home = () => {
    return (
        <div className="Home">
            <CarouselComponent/>
            <div>
                <div className="HomePartTwo">
                    <div className="HomePartTwoText">
                        <h2>Justo petentium te vix, scripta regione urbanitas</h2> <br/>
                        <p>Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix. Ad vix legere impetus, nam consequat reformidans ut. No sit consul integre voluptatibus, omnium lucilius ne mel. Et ancillae recteque deterruisset sed, ea nec odio option, ferri assum eum et.</p> <br/>
                        <ul>
                            <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
                            <li>Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur</li>
                            <li>Ut qui dicant copiosae interpretaris</li>
                            <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</li>
                        </ul> <br/>
                        <button className="HomePartTwoLearnMoreBtn">Learn More</button>
                    </div>

                    <img src={OfficePhoto} alt="office space" className="HomePartTwoPhoto"/>
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
