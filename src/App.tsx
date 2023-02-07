import './App.css'
import { ReactCounter } from './components/ReactCounter'
import SvelteCounter from './components/SvelteCounter.svelte'
import { withSvelte } from './utils/withSvelte'

const SvelteConvertedCounter = withSvelte(SvelteCounter)

const App = () => (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React + Svelte</h1>
      <div className="card">
        <ReactCounter title='React Counter' />
        <SvelteConvertedCounter title='Svelte Counter' />
      </div>
    </div>
  )

export default App
