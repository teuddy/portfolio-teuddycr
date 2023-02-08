import { delay, motion } from "framer-motion"
import logo from './logo.png'

//animations 
//bg-[#10101a]

export const Splash = () => {
    return( 
       
           <motion.div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#10101a] z-20" animate={{y:"-100vh"}} transition={{duration:2,delay:6.5,type:"springs"}}>
                {/*my name that goes in from the left */}
                <motion.p initial={{x:-10,opacity:0}} animate={{x:4,opacity:10}}  transition={{type:"springs",duration:2}} className="text-white font-markpro mr-2 mt-1">Teuddy J. Cedano</motion.p>
                {/*my knowledge that goes in from the right */}
                <motion.div initial={{x:10,opacity:0}} animate={{x:0,opacity:10}}  transition={{type:"springs",duration:2}} className=" shadow-innersplash  overflow-hidden">
                    {/*animation thay show every technical knowledge */}
                    <motion.div className="h-10 p-2 flex items-center flex-col gap-y-2" animate={{y:-180}} transition={{duration:5,delay:2}} >
                            <p className="font-markprobold text-xl text-slate-100 z-0 ">JavaScript</p>
                            <p className="font-markprobold text-xl text-slate-100">TypeScript</p>
                            <p className="font-markprobold text-xl text-slate-100">Node</p>
                            <p className="font-markprobold text-xl text-slate-100">React</p>
                            <p className="font-markprobold text-xl text-slate-100">Docker</p>
                            <p className="font-markprobold text-xl text-slate-100">Framer Motion</p>    
                    </motion.div>
                </motion.div>
           </motion.div>
           
     
    )
}
