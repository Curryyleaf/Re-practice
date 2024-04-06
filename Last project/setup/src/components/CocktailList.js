import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function CocktailList() {
  const{cocktails , loading }= useGlobalContext();
  if(loading){
    <Loading/>
  }else if(cocktails.length <1){
  return(
    <>
    <h2>whatever go back yar No such fucking cocktails</h2>
    </>
  )  
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
      {cocktails.map((item)=>{
        <Cocktail key={item.id} {...item}/>
      })}
      </div>
    </section>
  )
}
