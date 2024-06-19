import React from 'react'
import DishCategories from './DishCategories'
import Dishes from './Dishes'
import { useState } from 'react'

export default function Header({search}) {
  const [categorie, setCategorie] = useState("all")

  return (
    <main>
        <header className='container'>
            <div className='title'>
                <h4>Menu</h4>
            </div>
            <div className="menu">
            <DishCategories categorie={categorie} setCategorie={setCategorie}/>
            <Dishes categorie={categorie} search={search}/>
            </div>
        </header>
    </main>
  )
}
