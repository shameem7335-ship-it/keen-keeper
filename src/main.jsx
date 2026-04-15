import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout'
import Homepage from './page/Homepage'
import DetailsPage from './page/DetailsPage'
import TimelinePage from './page/TimelinePage'
import StatsPage from './page/StatsPage'
import ContactProvider from './components/customhooks'
import { ToastContainer } from 'react-toastify'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
       index: true,
       element: <Homepage></Homepage>
     },
     {
      path:"/homepage/details/:id",
      element: <DetailsPage></DetailsPage>,
       
     },
     {
      path:"/timeline",
      element: <TimelinePage></TimelinePage>
     },
     {
      path:"/stats",
      element: <StatsPage></StatsPage>
     },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
   <RouterProvider router={router}></RouterProvider>
  <ToastContainer position='top-center' />
  </ContactProvider>
  </StrictMode>,
)
