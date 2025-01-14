import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Products/:id',
        element:<Products/>
      },
      {
        path:'/Product/:id',
        element:<Product/>
      },
      
    ]
  }
]); 
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
