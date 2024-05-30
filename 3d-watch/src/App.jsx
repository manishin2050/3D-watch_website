import './App.css'
import Watch from './Components/3dWatch'
import Footer from './Components/Footer'
import Info from './Components/Info'
import Line from './Components/Line'
import Navbar from './Components/Navbar'
import MoveingWatch from './Components/MoveingWatch'
import PopularW from './Components/PopularW'
import Watchdet from './Components/Watchdetails'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shop'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  const router= createBrowserRouter([

  {
      path:"/",
      element:<><Navbar/>  <Watch/> <Line/> <Info/><MoveingWatch start={0} end={-150}/><MoveingWatch start={-150} end={0}/> <PopularW/>  <Footer/> </>
  },
  {
      path:"/shop",
      element:<><Navbar/>  <Shop/>    <Footer/></>
  },
  {
      path:"/orders",
      element:<><Navbar/>  <Watchdet/>    <Footer/></>
  },
  {
      path:"/login",
      element:<><Navbar/>  <LoginPage/>    <Footer/></>
  },
  {
      path:"/register",
      element:<><Navbar/>  <RegisterPage/>    <Footer/></>
  },
  {
      path:"/homepage",
      element:<><Navbar/>  <HomePage/>    <Footer/></>
  },
  ])

  return (
<>


    <RouterProvider router={router}/>
</>


  )
}

export default App




