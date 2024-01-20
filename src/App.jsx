import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";

import Layout from './Components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";

const App= () =>{

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element ={<Layout/>}>
          <Route index path="/" element ={<Dashboard/>}></Route>
          <Route path="/cart" element ={<Cart/>}></Route>
      </Route>
    )
  )
  
  return (
    <div >
     
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
