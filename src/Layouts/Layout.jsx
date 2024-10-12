import React,{ useState }  from 'react'
import { Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // Function to toggle sidebar visibility
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex min-h-screen m-0 dark:bg-black'>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
     

      <div className='flex-grow dark:bg-black'>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className = "p-20 dark:bg-black min-h-screen">
         <Outlet  / >
        </div>
      </div>
      


      
    </div>
  )
}

export default Layout
