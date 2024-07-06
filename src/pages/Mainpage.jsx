import React , {useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import {Mens,Womens} from '../data'
import WomensCollections from '../Components/WomensCollections'

const Mainpage = () => {

  const [mensFashion , setMensFashion] = useState(Mens)
  
  const [womensFashion , setWomensFashion] = useState(Womens)
  console.log(Mens)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections mensFashion={mensFashion}/>
        <WomensCollections womensFashion={womensFashion}/>
        <Footer/>
        

    </div>
  )
}

export default Mainpage