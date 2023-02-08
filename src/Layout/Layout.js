import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
//components
import {Splash} from '../components/Splash/Splash'
import { Menu } from '../components/Menu/Menu'
import {Name} from '../components/Name/Name'
import {Footer} from '../Layout/Footer'
//bg-[#10101a
export const Layout = () => {
    return(
      <>
            {/* <Splash/> */}

            <div className="bg-[#10101a] p-6 md:bg-red-500">
                {/*Flooting Menu */}
                 <div className="z-10 sticky top-2 rounded-full p-4 backdrop-blur-[104px] bg-[#2a2b3880] border-[1px] border-[#2a2b37] flex items-center justify-between">
                    <div className=''>
                        <p className="text-white text-sm font-markerpro text-slate-300">{"< / >"}</p>
                    </div>
                    <Name name="Teuddy J. Cedano" hide={-100}/>
                    <Menu/>
                </div>
            <Outlet/>
            <Footer/>
        </div>
      </>
    )
}
