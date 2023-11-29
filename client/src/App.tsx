  import {createBrowserRouter, RouterProvider} from 'react-router-dom'
  import DashBoard from './vistas/DashBoard'
  import Home from './vistas/Home'
  import Login from './vistas/Login'
  import Registro from './vistas/Registro'
  import Chef from './vistas/Chef'
  import Mosa from './vistas/Mosa'
import MesaID from './vistas/MesaID'
  export default function App() {

    const routes = createBrowserRouter([
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/dashboard",
        element: <DashBoard />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/registro",
        element: <Registro />
      },
      {
        path:"/chef",
        element: <Chef />
      },
      {
        path:"/mosa",
        element: <Mosa />
      },{
        path:"/mesa/:id",
        element: <MesaID />
      }
    ])
    return (
      <>
    <RouterProvider router={routes} />
      </>
    )
  }
