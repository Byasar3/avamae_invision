import { Link } from "react-router-dom"
import companyLogo from '../Resources/Logo.svg'

const Navbar = () => {
    return (
        <nav>
            <img src={companyLogo} alt="Company Logo" className="NavbarLogo"/>
            <ul className="NavUl">
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about-us'>ABOUT US</Link>
                </li>
                <li>
                    <Link to='/contact-us'>CONTACT US</Link>
                </li>
                <button className="LogInButton">Log In</button>
            </ul>
        </nav>
    )
}

export default Navbar;