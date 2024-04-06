import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index , setIndex] = useState(0);
  // are index 0 and number 0 same? 
  // ANSWER=> yes they both are just numeric value , index is just a variable that holds the value . so code will know the difference how you use it then inheirt difference 
  const {name , job , image , text } = people[index];

const newNumber = (number)=>{
  if(number > people.length-1){
    return 0 ;
  }
  if(number < 0){
    return people.length -1
  }
  return number;
}

  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex = index + 1;
      return newNumber(newIndex);
      // ask how would you write this code without making a sperate function?
      // ANSWER => here the index parameter represents the current value of the state
    })
  }

const prevPerson=()=>{
  setIndex((index)=>{
    let newIndex= index-1;
    return newNumber( newIndex);
  })
}

const randomPerson=()=>{
  let randomNumber= Math.floor(Math.random()*people.length);
  if(randomNumber === index){
    // randomNumber= randomNumber-1
    randomNumber= index+1;
  }
  return setIndex( newNumber(randomNumber));
  // Without this check of newNumber here , you will get that error 
}
  return <article className='review'>
 <div className="img-container">
  <img src={image} alt={name} className='person-img'/>
  <span className='quote-icon'>
    <FaQuoteRight/>
  </span>
 </div>
 <h4 className='author'>{name}</h4>
 <p className='job'>{job}</p>
 <p className='info'>{text}</p>
 <div className="button-container">
  <button className='prev-btn' onClick={prevPerson}>
    <FaChevronLeft/>
  </button>
  <button className='next-btn' onClick={nextPerson}>
    <FaChevronRight/>
  </button>
 </div>
 <button className='random-btn' onClick={randomPerson}>Suprise me </button>
  </article>;
};

export default Review;
