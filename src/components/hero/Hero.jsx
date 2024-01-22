import {motion} from "framer-motion";
import "./hero.scss";

const textVariants = {
    initial: {
        x:-500,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChilren:0.1,
        },
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition: {
            duration:2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>FAKHRI ABDULRAHMAN</motion.h2>
                    <motion.h1 variants={textVariants}>Développeur Web Full-Stack</motion.h1>
                    <motion.div className="btns" variants={textVariants}>
                        <motion.button variants={textVariants}>Voir les derniers travaux</motion.button>
                        <motion.button variants={textVariants}>Contactez moi</motion.button>
                    </motion.div>
                    <motion.img src="scroll.png" alt="scroll" variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                Spécialisé en Javascript & Créateur de Contenu
            </div>
            <div className="imageContainer">
                <img src="/hero.jpg" alt="profile image" />
            </div>
        </div>
    )
}

export default Hero;