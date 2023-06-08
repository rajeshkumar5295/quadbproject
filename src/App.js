
import Header from "./components/Header";

// import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider,ScrollRestoration, } from "react-router-dom";
import { Route,Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Maincontent from "./components/Maincontent";
import About from "./pages/About";
import Login from "./pages/Login";
import ShowFeature from "./pages/ShowFeature";
import Detail from "./pages/Detail";



function App() {
  return (
    <>
                       
             <Header/>
             <Routes>
                  
                  <Route  path="/" element={<Maincontent/>}   />
                  <Route    path="/detail/:id" element={ <Detail/> } />
                  <Route  path="/movies" element={<Home/>}   />
                  <Route    path="/webseries" element={<About/>} />
                  <Route   path="/login" element={<Login/>} />
                 
             </Routes>
                    
                  
                  
               

     
      
    </>
  );
}

export default App;
