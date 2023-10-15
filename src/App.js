import './App.css';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { DevelopmentProcess } from './Components/DeveopmentProcess';
import { Contact } from './Components/Contact';
import { Services } from './Components/Services';
import { Footer } from './Components/footer';
import { Clients } from './Components/Clients';






export default function App() {

  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <>
      <Navbar burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <Header />
      <Services />
      <DevelopmentProcess />
      <Clients/>
      <Contact />
      <Footer />

    </>
  )
}
