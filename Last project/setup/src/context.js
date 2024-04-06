import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
// here you are just creating a context object named Appcontext and exporting tht wherever you need , just  like a regualr object , function or files

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);
 
const fetchedData = async ()=>{
  const newData = await fetch(`${url} ${"id"}`);
  const finalData= await newData.json();
  const {drinks}=finalData;

if (drinks) {
  const data = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drinks;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  setCocktails(data);
  
}else{
  setCocktails([])
}
setLoading(false);


useEffect(()=>{
  fetchedData();
  // we were assining the fetch to a varaible so that we can use it here like this to refetch everytime the search term changes 
} , [searchTerm])

}
// fetched data 
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )


}
// Apprpovider


 export const useGlobalContext = ()=>{

}


export { AppContext, AppProvider }
