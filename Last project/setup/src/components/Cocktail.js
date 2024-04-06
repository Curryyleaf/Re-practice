import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, info, glass }) {
return(
  <article className='cocktail'>
    <div className="img-container">
      <img src={image} alt="coctail image" />

    </div>
    <div className="cocktail-footer">
      <h1>{name}</h1>
      <h2>{glass}</h2>
      <p>{info}</p>
      <Link to='/'/>
    </div>
  </article>
)
}

// article-cocktail
// div - img-container
// div- cocktail-footer
// link - btn btn-primary btn details