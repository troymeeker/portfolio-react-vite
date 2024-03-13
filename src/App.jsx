// import { useState } from 'react'

import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <div >
        {/* <p>Demo Calculator coming soon</p> */}
        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> +      </button> 
        <button onClick={() => setCount((count) => count - 1)}> -      </button> <br/>
   
        count is {count}
       </div> */}
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      s<div className="footer"></div>
    </div>
  );
}

export default App;
