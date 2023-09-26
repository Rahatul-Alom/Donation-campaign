import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistics from './pages/Statistics/Statistics';
import Card from './components/Card/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('/cardsData.json')
      },
      {
        path:"/donation",
        element: <Donation></Donation>

      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/cards/:id",
        element: <Card></Card>,
        loader: () => fetch('/cardsData.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
