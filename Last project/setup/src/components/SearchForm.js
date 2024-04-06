import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const searchRef= useRef();

const handleSubmit=(e)=>{
  e.prevent.default()
}
const searchForm = () => {
  const { setSearchTerm } = useGlobalContext();

const handleChange=()=>{
  setSearchTerm(searchRef.current.value);

}
  return(
  <section className="section search ">
    <form action="" className="search-from" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">
          <input type="text"
          value="name"
          name="name"
          id="name"
          onChange={handleChange}
          ref={searchRef}
          
          />
        </label>
      </div>
    </form>
  </section>

  )

};
// section-section search
// form - search-form
// div-form-control
// label-name
// input
