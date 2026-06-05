import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'

const usersPromise=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'Mobiles',Component:Mobiles },
      {path:'laptops',Component:Laptops},
      {path:'Home',Component:Home},
      {
        path:'Users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'Users2',
        element:<Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path:'Users/UserId',
        loader:({params})=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:UserDetails
      }
    ]
  },
  {
    path:'about',
    element:<div>About me</div>
  },
  {
    path:'app',
    Component:App
  },
  {
    path:'app2',
    element:<App></App>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
