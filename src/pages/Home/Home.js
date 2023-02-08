import { Splash } from "../../components/Splash/Splash"
import { motion} from "framer-motion"
import logo from './profile-pic.png'
import { ProjectsCards } from "../../components/ProjectsCards/ProjectsCards";
//bg-[#10101a]
export const Home = () => {

    return(
        <>
            {/* welcome text  */}
            <div className="h-[calc(100svh_-_70px)] flex flex-col md:bg-yellow-500">
                <div className=" pt-8 h-[90%]">
                    <p className="text-slate-300 text-[calc(12vh_-_10px)] leading-[25vw] md:leading-[12vh] font-markproheavy">turning {<br className="hidden"></br>} good ideas into big <motion.span className="font-markproheavy bg-gradient-to-r bg-gradient-to-r from-green-300 via-blue-500  via-green-500 to-purple-600   inline-block text-transparent bg-clip-text text-[calc(12vh_-_10px)] "  animate={{ backgroundSize:["300px","500px","600px","500px","300px"]}} transition={{duration:10,repeat:Infinity}} >Projects!</motion.span></p>
                </div>
                <div className="md:mt-8 ">
                    <p className="text-slate-100 font-markpro text-base">Hey, wanna see my <span className="underline">projects</span>?</p>
                </div>
                <div className="bottom-4 left-0 right-0 mr-auto ml-auto absolute  w-10 ">
                    
                    {/* <motion.p style={{ motion: scrollYProgress }} animate={{y:[5,0,5]}} transition={{repeat:"Infinity"}} className="text-xl">⬇️</motion.p> */}
                </div>
            

            </div> 

            {/**biography text */}
          
            <div className="h-screen flex flex-col justify-center relative overflow-hidden w-full gap-y-[20px] mt-[50px]">
                  

                   <div className=" absolute right-[-100px] px-4 bg-green-500" >
                        {/**344 ancho * 611 alto */}
                        <img src={logo}  />
                    </div>

        
                    <div className="h-[200px] w-[50%]" >
                
                        <motion.p initial={{opacity:0}} viewport={{once: true, amount: 0.8}} whileInView={{opacity:1}} transition={{duration:1,delay:1}} className="text-[#c4c4c4] font-markpro text-[5vw] break-words leading-[vh]">Born and raised  in a caribbean country called  <span className="underline">Do. Republic.</span>I've been coding  for <span className="underline cursive">8 years now.</span> <span className="text-[5px]">Feeww.. times flies huh?</span> </motion.p>
                        
                    </div>
               
              
                  
            </div>
            
            {/*projects intro text "each project is unique" */}
            <div className="py-20 gap-y-4  flex justfy-center flex-col  overflow-hidden">
                    <motion.p initial={{opacity:0}} whileInView={{x:5,opacity:1}} viewport={{once: true, amount: 0.8}} transition={{duration:1}} className="text-[#c4c4c4] leading-[5vh] text-[calc(12vh_-_10px)] font-markprobold letter-spaco mt-8">Each</motion.p>
                    <motion.p initial={{opacity:0}} whileInView={{x:22,opacity:1}} viewport={{once: true, amount: 0.8}} transition={{duration:1,delay:0.5}} className="text-[#c4c4c4] leading-[5vh] text-[calc(12vh_-_10px)] font-markprobold letter-spaco mt-8">Project</motion.p>
                    <motion.p initial={{opacity:0}} whileInView={{x:47,opacity:1}} viewport={{once: true, amount: 0.8}} transition={{duration:1,delay:1}} className="text-[#c4c4c4] leading-[5vh] text-[calc(12vh_-_10px)] font-markprobold letter-spaco mt-8">Is</motion.p>
                    <motion.p initial={{opacity:0}} whileInView={{x:65,opacity:1}} viewport={{once: true, amount: 0.8}} transition={{duration:1,delay:1.7}} className="text-[#c4c4c4] leading-[5vh] text-[calc(12vh_-_10px)] font-markproheavy  mt-8">Unique</motion.p>
            </div>
            
            {/*projects cards */}
            <div className="flex flex-col gap-y-4 md:grid md:grid md:grid-cols-2 md:gap-x-4">
                <ProjectsCards name={"Asovepabapuma"} desc={"Native mobile app for walking beach sellers."} />
                <ProjectsCards name={"Carenta"} desc="Rent cars in Dominican Republic just with a tap."/>
                <ProjectsCards name={"Shop"} desc="Buy anything you want, from wherever you are." />
                <ProjectsCards name={"Suyd"} desc="Looking for a job in Dominican Republic, we got you." />
            </div>
            
            {/*say bye */}
            {/* <div className="h-[calc(100svh)] flex flex-col justify-center  ">
               <div className="flex flex-col gap-y-6 py-24 bg-black left-0 absolute p-6">
                    <motion.span className="font-markproheavy bg-gradient-to-r bg-gradient-to-r from-green-300 via-blue-500  via-green-500 to-purple-600   inline-block text-transparent bg-clip-text text-[calc(6vh_-_10px)] "  animate={{ backgroundSize:["300px","500px","600px","500px","300px"]}} transition={{duration:10,repeat:Infinity}} >So.. when I start?</motion.span>
                    <p className="text-white font-markpro text-[3vh]">Hey, thanks for stopping by.{<br></br>} I'm currently looking for a {<br></br>} <span className="underline">new job</span>. If you think I might be good fit. here It's my <span className="font-markprobold">linkedin</span> or send me an <span className="font-markprobold">email.</span></p>
               </div>
            </div>
             */}
        </>
      
    )
}
//#10101a


