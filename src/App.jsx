import './global.css'

import style from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {
  return (
    <div>
      <Header />
      
      <div className={ style.wrapper }>
        <Sidebar />
        <Post />
      </div>
    </div>
  )
}

export default App
