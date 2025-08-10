import { Footer } from "flowbite-react";
import Header from "../commons/Header";
import Footerbar from "../footer/Footer";
import { Outlet } from "react-router-dom";

function Layout({children}){
    return (
        <>
        <Header />
        <main>
            <Outlet/>
        </main>
       <Footerbar />
        </>
    )
}
export default Layout;