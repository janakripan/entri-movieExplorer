import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/HomeLayout/Header'

const HomeLayout = () => {
  return (
    <>
    <Header/>
    <div id='detail'>
        <Outlet/>

    </div>
    </>
  )
}

export default HomeLayout
