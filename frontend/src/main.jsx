import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import Home from './Pages/Home/Home.jsx'
import Search from './Pages/Search/Search.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import { Authentication } from './Pages/Authentication/Authentication.jsx'
import UserProvider from './Context/userContext.jsx'
import { Profile } from './Pages/Profile/Profile.jsx'
import {ManageNews} from './Pages/ManageNews/ManageNews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/manage-news/:action",
        element: <ManageNews />,
      }
    ],
  },
  {
    path: "/auth",
    element: <Authentication/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)
