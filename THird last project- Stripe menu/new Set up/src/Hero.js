import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {     
        closeSubmenu}=useGlobalContext();


  return <section className='hero'>
 <div className="hero-center" onMouseOver={closeSubmenu}>
  <article className='hero-info'>
    <h1>Kathmandu Payment Structure</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestias, placeat sequi voluptatum debitis aperiam omnis modi cum, numquam suscipit nostrum dolor. Mollitia libero nulla iusto alias inventore id ratione?</p>
    <button className='btn'>
      Khata Kholnus
    </button>
  </article>
  <article className='hero-images'>
    <img src={phoneImg} alt="phone image" />
  </article>
 </div>
  </section>
}

export default Hero
