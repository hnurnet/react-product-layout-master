import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import {Provider} from "react-redux";
import store from '../store/store';



const RouteLayout = () => {
  return (
    <>
  <Provider store={store}>
  <NavBar/>
    <main>
        <Outlet/>
    </main>
  </Provider>
    </>
  )
}

export default RouteLayout