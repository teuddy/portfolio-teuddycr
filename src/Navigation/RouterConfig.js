import { Route, Routes } from "react-router-dom"
//components
import { Layout } from "../Layout/Layout"
import { Home } from "../pages/Home/Home"

export const RouterConfig = () => {

    return(
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>    
                    
                </Route>   
            </Routes>       
        </>
    )

}