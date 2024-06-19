import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState(null)
  return (
    <div className="App">
     <Navbar  setSearch={setSearch} search={search}/>
     <Header search={search}/>
     
    </div>
  );
}

export default App;
