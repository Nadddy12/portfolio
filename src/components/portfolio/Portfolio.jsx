import { useRef } from "react";
import { motion, useScroll , useSpring, useTransform} from "framer-motion";
import "./portfolio.scss";

const items = [
    {
        id:1,
        title:"Agence Immobilier",
        img:"/immobilier.png",
        desc:"Un exemple simple de site web immobilier avec une fonctionnalité de recherche et une base de données. Vous pouvez créer un compte et ajouter votre maison. Réalisé avec React, serveur Node.js, MongoDB et Firebase (MERN). PS: (Pour lancer le site web, cela pourrait prendre 5 minutes car il est hébergé gratuitement.)",
        github:"https://github.com/Nadddy12/habitaitMERN",
        demo:"https://fakhri-immobilier.onrender.com/"
    },
    {
        id:2,
        title:"Wiki et Blog de jeu Elden Ring",
        img:"/elden.png",
        desc:"Un projet de fin d'études comprenant une section administrateur avec 6 fonctionnalités CRUD pour ajouter des blogs, des guides, des équipements et des sorts, ainsi qu'une section permettant aux utilisateurs normaux d'ajouter et de tester les états de leurs personnages (simulateur de statistiques) et laissez des commentaires sur les articles. Les administrateurs peuvent promouvoir des personnes pour devenir des modérateurs. Réalisé avec React, serveur Node.js, MongoDB",
        github:"https://github.com/Nadddy12/Elden-ring-wiki-personal-project-",
        demo:"none"
    },
    {
        id:3,
        title:"Projets en construction",
        img:"/next.jpg",
        desc:"Bientôt, d'autres projets seront disponibles. Utilisation de C#, PhP et JS",
        github:"none",
        demo:"none"
    },
];

const Single = ({item}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="item photo"/>
                    </div>
                    <motion.div className="textContainer" style={{y:y}}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        {item.demo !== "none" ? (
                            <motion.a href={item.demo} whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="demo">
                                Démo
                            </motion.a>
                        ) : (
                            <span className="disabled-link">Démo</span>
                        )}
                        {item.github !== "none" ? (
                            <motion.a href={item.github} whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="github">
                                Github
                            </motion.a>
                        ) : (
                            <span className="disabled-link">Github</span>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {


    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["end end" , "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <motion.div className="progress">
                <h2>Projets vedettes</h2>
                <motion.div className="progressBar" style={{scaleX:scaleX}}></motion.div>
            </motion.div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
};

export default Portfolio;