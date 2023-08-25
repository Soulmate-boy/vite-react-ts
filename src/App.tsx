import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from 'antd';
import { ColorPicker } from 'antd';
import styles from "./App.module.less";

import { state } from '@/store';
import { useSnapshot } from 'valtio';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Button type="primary">Primary Button</Button>
      <ColorPicker />
      <div>
        <p>
          state：
          {/* {snap} */}
        </p>
        <div className={styles.con}>
          <div className={styles.aa}>
            xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App