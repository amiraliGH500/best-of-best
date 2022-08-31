import "./App.css";
import { blogList } from "./blog-list.js";
import { motion, Variants } from "framer-motion";
const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate={
    offscreen:{y:0, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
 }

}

function Card() {
  return (
    <div>
          <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="mrB.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Mr.Beast</motion.h2>
      <motion.p
         variants={textAnimate}     
      >React, Short, iconic, Challenge</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="mia.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Mia Plays</motion.h2>
      <motion.p
         variants={textAnimate}     
      >React, Games, Vlog</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="skeppy.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Skeppy</motion.h2>
      <motion.p
         variants={textAnimate}     
      >Minecraft, Troll, challenge</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="donji.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Doni Bobes</motion.h2>
      <motion.p
         variants={textAnimate}     
      >Minecraft, Troll, Challenge</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="dream.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Dream</motion.h2>
      <motion.p
         variants={textAnimate}     
      >Minecraft, Challenge</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="vigiato.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Vigiato</motion.h2>
      <motion.p
         variants={textAnimate}     
      >Minecraft, Challenge, Games</motion.p>
    </motion.div>    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="sogang.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Sogang</motion.h2>
      <motion.p
         variants={textAnimate}     
      >React, Vlog</motion.p>
    </motion.div>
    <motion.div className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >
        <img src="sypher.png" className="size"/>
        </motion.div>
      <motion.h2 
        variants={textAnimate}
      >Sypher PK</motion.h2>
      <motion.p
         variants={textAnimate}     
      >Fortnite, React</motion.p>
    </motion.div>
    </div>
  );
}

export default Card

