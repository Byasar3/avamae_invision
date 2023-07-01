import CarouselComponent from "../components/CarouselComponent"
import OfficePhoto from "../Resources/shutterstock_696636415.jpg"
import WomanPouting from "../Resources/shutterstock_1302552622.jpg"
import { Link } from "react-router-dom"

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
                <div className="HomePartFour">
                    <h3>Sed libero justo, lobortis sit amet suscipit non</h3>
                    <h4>taria duo ut vis semper abhorreant</h4>
                    <div className="HomePartFourParagraphs"> 
                        <p>Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla. Nam auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque. Curabitur eget turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex. Nullam quis orci ante. Nunc felis massa, posuere non gravida in, commodo in arcu. In feugiat magna non volutpat faucibus. Nam aliquam justo nec aliquam iaculis. Integer laoreet pulvinar elit pulvinar fermentum. Morbi vehicula sodales nunc ac varius. Proin porttitor porttitor libero vel pharetra.</p>
                        <p>Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam. Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum suscipit. Proin et elementum arcu, sit amet porttitor diam. Curabitur euismod, erat vitae tristique volutpat, augue lectus dignissim justo, at faucibus orci est a elit.</p>
                        <p>Sed sed sapien pretium, maximus felis vel, mollis elit. Sed libero justo, lobortis sit amet suscipit non, auctor non libero. Maecenas quis nisl eget enim porta blandit a nec sapien. Mauris porttitor lorem ut egestas euismod. Donec molestie tempor nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut tortor scelerisque, at iaculis nunc ornare. Pellentesque non nunc nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor magna augue, non auctor quam placerat nec. Nulla sem urna, dictum sed nisi in, viverra rutrum neque. Aliquam ipsum nunc, porta a augue nec, fringilla mollis arcu. In a vehicula odio. Praesent vulputate turpis eleifend egestas ultrices. Proin nec sagittis nibh. Curabitur fringilla felis a porttitor maximus. Vestibulum aliquet ante nec leo malesuada porttitor sit amet et magna.</p>
                    </div>
                    <button><Link to="/contact-us">Contact Us</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
