import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/home_page"
import About from "./pages/About/about_page"
import ServiceTech from "./pages/ServiceTech/service_page"
import Navbar from "./components/Navbar"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="service" element={<ServiceTech/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router }/>
  )
}

export default App
