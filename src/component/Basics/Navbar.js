import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
            {menuList.map((index) =>{
                return (
                  <button
                    className="btn-group__item"
                    onClick={() => filterItem(index)}
                  >
                    {index}
                  </button>
                );
            })}
         </div>
      </nav>
    </>
  );
}

export default Navbar
