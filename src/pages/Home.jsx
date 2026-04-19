import { useState } from 'react'
import logo from '../assets/gatelogo.png'

const Home = () => {
  
   return (
    <div>
      <section>
        <img src={logo} alt="Gate" style={{width: '200px' , height: 'auto', marginRight :'75%', marginTop:'2%'}}/>
      </section>
      <section>
        <h4 style={{marginTop:'-8%'}}>Gaming ja Tech katsauksia <br/> Tervetuloa porttien sisälle</h4>
      </section>
      <section style={{marginTop:'10%', border: 'solid',borderColor :'grey'}}>
        <h3>Peliuutiset</h3>
        <hr/>
        <p>Pelirintamalla tapahtuu, uusia tulokkaita on julkaistu, katso artikkeli tästä</p>
        <p>Pragmata sekä Crimson Desert saatavilla PC:lle</p>
      </section>


    </div>
  )
}

export default Home
