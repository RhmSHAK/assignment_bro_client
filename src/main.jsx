import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProviders from './Provider/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
           <AuthProviders>
                <RouterProvider router={router} />
           </AuthProviders>
      </React.StrictMode>,
  </div>
)
