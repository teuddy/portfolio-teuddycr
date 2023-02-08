import { motion } from "framer-motion"
export const Menu = () => {
    return(
        <motion.div whileHover={{scale:0.8}} class="space-y-[6px] mr-2">
                <motion.span class="block w-8 h-[1px] bg-slate-300"></motion.span>
                <motion.span class="block w-6 h-[1px] bg-slate-300"></motion.span>
                <motion.span class="block w-8 h-[1px] bg-slate-300"></motion.span>
        </motion.div>
    )
}