import { FaFacebook , FaYoutube , FaLinkedin , FaGithub} from "react-icons/fa";
import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            {/**Sidebar */}
            <div className="wrapper">
                <span>Fakhir Dev</span>
                <div className="social">
                    <a href=""><FaFacebook className="social-icons"/></a>
                    <a href=""><FaYoutube className="social-icons"/></a>
                    <a href=""><FaLinkedin className="social-icons"/></a>
                    <a href=""><FaGithub className="social-icons"/></a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;