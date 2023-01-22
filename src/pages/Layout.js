import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className='d-flex flex-column h-100 mBackground'>
      <header className='text-center'>
        <Navigation/>
      </header>
      <div className='flex-grow-1'>
        <Outlet />
      </div>
      <Footer/>
    </div>   
  )
};

export default Layout;