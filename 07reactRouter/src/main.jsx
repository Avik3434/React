import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, {getUserDataFromUrl} from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path=''  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route 
      loader={getUserDataFromUrl}
      path='/github'  
      element={<Github/>}/>
    </Route>
   )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
