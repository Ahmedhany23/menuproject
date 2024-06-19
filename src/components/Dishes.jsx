import { useEffect, useState } from "react";
import { food } from "../data";
import { motion } from "framer-motion";
export default function Dishes({ categorie,search }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (categorie === "all") {
      setState(food);
    }  else {
      let filterByCategorie = food.filter((f) => f.categorie === categorie);
      setState(filterByCategorie);
    }
 
    if(search){
      let filterByName = food.filter((f) => f.foodname.toLowerCase().includes(search.toLowerCase())  );
      setState(filterByName);
    }
   
  }, [categorie,search]);

  return (
    <main>
      <div className="dishes container">
        
          {state.map((f) => (
            <motion.div initial={{y:-100,opacity:0.3}} animate={{y:0,opacity:1}}  transition={{duration:0.3,stiffness:0.8,damping:1}} key={f.id} className="menu-items">
              <img src={f.image} alt="" />
              <p className="foodname handle">{f.foodname}</p>
            </motion.div>
          ))}
       
      </div>
    </main>
  );
}
