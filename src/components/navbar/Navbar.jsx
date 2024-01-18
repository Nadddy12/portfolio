import { FaFacebook , FaYoutube , FaLinkedin , FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{opacity:0 , scale:0.5}}
                    animate={{opacity:1 , scale:1}}
                    transition={{duration:0.5}}
                >
                    Fakhir Dev
                </motion.span>
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