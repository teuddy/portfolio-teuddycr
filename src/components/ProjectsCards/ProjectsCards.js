import { motion } from "framer-motion";

const cardVariants ={
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


export const ProjectsCards = ({name,desc}) => {
    return (
        <div className="mb-4 border-[#171e30] border-[1px]   rounded-lg">
            {/*Title and Description*/}
            <div className="pl-2 pt-2 pb-2 px-2 bg-[#171e30] h-[100px]">
                <p className="text-white text-xl font-markpromedium">{name}</p>
                <p className="text-white font-markpro">{desc}</p>
            </div>
            {/*iphone */}
            <motion.div className="overflow-hidden flex items-center justify-center h-60 " initial="offscreen"  whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                <motion.div className="bg-[black] border-gray-900 border-[2px] w-60 h-[270px] rounded-[30px] relative" variants={cardVariants}>
                    <div className="bg-gray-900 absolute top-4 rounded-full left-0 right-0 ml-auto mr-auto w-[100px] h-4"/>
                
                </motion.div>
                

            </motion.div>
        </div>
      );
}