import './global.css'

import style from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />
      
      <div className={ style.wrapper }>
        <Sidebar />
        <main>Testando post</main>
      </div>
    </div>
  )
}

export default App
