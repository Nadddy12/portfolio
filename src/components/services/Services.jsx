import { useRef } from "react";
import "./services.scss";
import {motion , useInView} from 'framer-motion';

const variants = {
    initial: {
        x:-500,
        y:100,
        opacity:0,
    },
    animate: {
        x:0,
        y:0,
        opacity:1,
        transition: {
            duration:1,
            staggerChildren:0.2,
        },
    },
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return(
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>Offrons des compétences spécialisées en JS, React.js, Node.js et NoSQL
                <br />pour créer des solutions web robustes et innovantes.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/example.jpg" alt="icon"/>
                    <h2>Savoir faire</h2>
                </div>
                <div className="title2">
                    <h2>La <motion.b whileHover={{color:"gold"}}>clé</motion.b> de succès dans chaque ligne de code</h2>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.img whileHover={{y:20}} src="/html.png" alt="html"/>
                <motion.img whileHover={{y:20}} src="/css.png" alt="css"/>
                <motion.img whileHover={{y:20}} src="/javascript.png" alt="js"/>
                <motion.img whileHover={{y:20}} src="/nodejs.png" alt="node"/>
                <motion.img whileHover={{y:20}} src="/express-js.png" alt="express"/>
                <motion.img whileHover={{y:20}} src="/Mongodb.png" alt="mongo"/>
                <motion.img whileHover={{y:20}} src="/react.png" alt="react"/>
            </motion.div>
        </motion.div>
    )
};

export default Services;