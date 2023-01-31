import React from 'react'
import HideAppBar from '../../views/shared/Nav/HideAppBar';
import Footer from '../../views/shared/Footer/Footer';

export const MainLayout = ({children}) => {
  return (
    <div>
    <HideAppBar/>
     <main>{children}</main> 
     <Footer/>
    </div>
  )
}
