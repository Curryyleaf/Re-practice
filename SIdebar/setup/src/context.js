import React, { useState, useContext, createContext } from 'react'


const AppContext = React.createContext();

const AppProvider =({children})=>{
const[ showModal , setShowModal ] = useState(false );
const[showSidebar , setShowSidebar] = useState(false);

const openSidebar=()=>{
    setShowSidebar(true);
}
const closeSidebar=()=>{
    setShowSidebar(false)
}
const openModal=()=>{
    setShowModal(true);
}
const closeModal=()=>{
setShowModal(false)
}
   return (
    <AppContext.Provider value={
        {
     showModal,
     setShowModal , 
     showSidebar ,
     setShowSidebar ,
     openModal,
     openSidebar,
     closeModal,
     closeSidebar
        }
    }>
        {children}
    </AppContext.Provider>
   )
}

// custom hook 
export const useGlobalContext= ()=>{
   return  (useContext(AppContext))
}

export{ AppContext , AppProvider};
