import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet import qilish
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <header>
        {<Header/>}
      </header>
      <main>
        <Outlet /> {  
        
         }
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </>
  );
}

export default Layout; // To'g'ri eksport qilish
