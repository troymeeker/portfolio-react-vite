// import { useState } from 'react'

import styles from "./App.module.css";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/Main";

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <div className="nav">
        {/* <p>Demo Calculator coming soon</p> */}
        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> +      </button> 
        <button onClick={() => setCount((count) => count - 1)}> -      </button> <br/>
   
        count is {count}
       </div> */}
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      s<div className="footer"></div>
    </div>
  );
}

export default App;
