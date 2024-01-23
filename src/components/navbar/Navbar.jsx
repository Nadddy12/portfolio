import { FaFacebook , FaYoutube , FaLinkedin , FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"

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
                    <a href="https://www.facebook.com/abdul.fakhri.146/"><FaFacebook className="social-icons"/></a>
                    <a href="https://www.youtube.com/@madnedgaming3867"><FaYoutube className="social-icons"/></a>
                    <a href="https://www.linkedin.com/in/abdulrahman-fakhri-07334825a/"><FaLinkedin className="social-icons"/></a>
                    <a href="https://github.com/Nadddy12"><FaGithub className="social-icons"/></a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;