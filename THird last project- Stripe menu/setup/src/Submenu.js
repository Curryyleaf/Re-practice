import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
const Submenu = () => {

  const container = useRef(null);
  const {
    isSubMenuOpen,
    location , 
    closeSubMenu,
    page: { page, links },
    // Here we are directly extracting page and links from the page object which is inside the useGlobal contxt
  } = useGlobalContext();

  const[columns , setColumns]= useState('col-2')
  useEffect(() => {

    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    // remember this way of giving csss calues as well
    submenu.style.top = `${bottom}px`;

    if(links.length=== 3){
      setColumns('col-3');
    } if(links.length> 3){
      setColumns('col-4');
    }
  });

  return (
    <aside
      className={`${isSubMenuOpen ? "subemenu show " : "subemenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-2 ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
