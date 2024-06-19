import React from "react";

export default function Navbar({setSearch,search}) {

  return (
    <nav>
      <div className="container">
        <h3 className="handle" >Food Menu</h3>
        <form>
          <label className="handle" htmlFor="">Search</label> <input type="search" name="" id="" onChange={(e)=>{setSearch(e.target.value)}} />
        </form>
      </div>
    </nav>
  );
}
