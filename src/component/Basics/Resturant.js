import React, { useState } from 'react';
import "../../styles/style.css";
// import image from "../Basics/images";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);


  // console.log(menuData);

  const filterItem =(category) =>{
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return(
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' 
         onClick={() => filterItem("Breakfast")}>
          Breakfast</button>
        <button className='btn-group__item' 
        onClick={() => filterItem("Lunch")}>
          Lunch</button>
        <button className='btn-group__item' 
        onClick={() => filterItem("Dinner")}>
          Dinner</button>
        <button className='btn-group__item' onClick={() =>filterItem("Snack")}>
          Snack</button>
          <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All
          </button>

      </div>
    </nav>
    <MenuCard menuData={ menuData  }/>
    </> 
    );
};

export default Resturant ;
