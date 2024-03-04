import { useState } from 'react'

import styles from './App.module.css'

function App() {
   const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <p>Hello world</p>
      <div>
        {/* <p>Demo Calculator coming soon</p> */}
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> +      </button> 
        <button onClick={() => setCount((count) => count - 1)}> -      </button> <br/>
   
        count is {count}
       </div>
       </div>

    </div>
  )
}

export default App;
