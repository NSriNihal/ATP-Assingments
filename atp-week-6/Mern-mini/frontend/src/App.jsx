import { createBrowserRouter,RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import CreateEmployee from "./components/CreateEmployee"
import ListOfEmps from "./components/ListOfEmps"
import Employees from './components/Employees'
import EditEmployee from './components/EditEmployee'

function App() {
  const routerObj = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {path:"",
          element:<Home/>
        },
        {path:"create-emp",
          element:<CreateEmployee/>
        },
        {path:"list",
          element:<ListOfEmps/>
        },
        {
          path:"employee",
          element:<Employees/>
        },
        {
          path:"edit",
          element:<EditEmployee/>
        }
        
      ]
    }
  ])
  return <RouterProvider router={routerObj} />
}

export default App