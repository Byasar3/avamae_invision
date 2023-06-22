import { Link } from "react-router-dom"
import companyLogo from '../Resources/Logo.svg'

export const Navbar = () => {
    return (
        <nav>
            <img src={companyLogo} alt="Company Logo" />
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <button className="logInButton">
                Log In
            </button>
        </nav>
    )
}
