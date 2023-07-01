import CarouselComponent from "../components/CarouselComponent"
import OfficePhoto from "../Resources/shutterstock_696636415.jpg"
import WomanPouting from "../Resources/shutterstock_1302552622.jpg"
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
                        <button>Learn More</button>
                    </div>
                    <img src={OfficePhoto} alt="office space"/>
                </div>
                <div className="HomePartThree">
                    <img src={WomanPouting} alt="woman with sunglasses, pouting"/>
                    <div className="HomePartThreeText">
                        <h3>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h3> <br/>
                        <p>Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.</p>
                        <button>Log In</button>
                    </div>
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
