import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <div className='w-full max-w-[1920px]'>
            <RouterProvider router={router} />
        </div>
  </StrictMode>,
)
