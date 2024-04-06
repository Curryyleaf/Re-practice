import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const meroCategory = ['all',  ...new Set(items.map((item) => item.category))];
// the code was not working for this project when clicling the button of all just because you had ["all ", ...new Set and so on . so you had extra space after all , 


function App() {
  const [menuItems , setMenuItems] = useState(items);
  const[ categories , setCategories] = useState(meroCategory);

const filterItems = (category) => {
  if(category==='all'){
    setMenuItems(items)
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Hamro menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );

}

export default App;
