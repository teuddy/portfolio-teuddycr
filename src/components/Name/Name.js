import { motion } from "framer-motion"

export const Name = ({name,hide}) => {
   return(
    <div className="overflow-hidden w-26 pl-2">
        <motion.p  animate={{x:[hide,0,hide]}} transition={{duration:10,type:"springs",repeat:"Infinity",repeatDelay:5,stiffness:100}} className="text-slate-300 text-[10px] font-markpro">{name}</motion.p>
    </div>  
   )
}