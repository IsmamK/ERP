import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,useNavigate } from "react-router-dom";
import Layout from './Layouts/Layout'
import Dashboard from  "./pages/Dashboard.jsx"
import Warehouse from  "./pages/Warehouse.jsx"
import Delivery from  "./pages/Delivery.jsx"
import Stores from  "./pages/Stores.jsx"
import Invoices from  "./pages/Invoices.jsx"
import Analytics from  "./pages/Analytics.jsx"
import AccountRoles from  "./pages/AccountRoles.jsx"



const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: 'dashboard', element: <Dashboard />},

        { path: 'warehouse',
          
          children:[
          { path: '', element: <Warehouse /> },
          
         

        ] },

        { path: 'delivery',
          children:[
            { path: '', element: <Delivery /> },
           
  
          ]
          },

        { path: 'stores', 
          children:[
            { path: '', element: <Stores /> },
           
  
          ]
        },

        { path: 'invoices',  
          children:[
            { path: '', element: <Invoices /> },
           
  
          ]
        },

        { path: 'analytics', 
          children:[
            { path: '', element: <Analytics /> },
           
  
          ]
         },

        { path: 'account-roles', 
          children:[
            { path: '', element: <AccountRoles /> },
           
  
          ]
        },
      
      ],
    },

  ]);
  
  

  return <RouterProvider router={router} />;
};

export default App;
