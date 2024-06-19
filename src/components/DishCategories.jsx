import React from "react";
import { food } from "../data";

const categories = ["all", ...[...new Set(food.map((f) => f.categorie))]];
console.log(categories);

export default function DishCategories({categorie,setCategorie}) {
  return (
    <section className="menu-categories">
      {categories.length >= 1 ? (
        categories.map((c) => {
          return (
            <div className="categorie handle" key={c} onClick={()=>{setCategorie(c)}} >
              {c.toLocaleUpperCase()}
            </div>
          );
        })
      ) : (
        <div>no items</div>
      )}
    </section>
  );
}
