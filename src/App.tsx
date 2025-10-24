import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout";


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <div>Home Page</div>
    },
    {
      path: '/about',
      element: <div>About Page</div>
    },
    {
      path: '/contact',
      element: <div>Contact Page</div>
    }
  ]
}]);



function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
