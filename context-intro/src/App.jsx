import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'
import { useState, useContext} from 'react'
import DataContext from './DataContext'


function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Gideon",
    favColor: "Teal",
    favFood: "Poutine",
    favMovie: "Airplane!"
})
  return (

    
  
      <div className="app">
        <div className="header">
          <h1>Intro to Context</h1>
        </div>

        <DataContext.Provider value = {{userInfo, setUserInfo}}> 
          <ComponentA/>
          <ComponentB/>
        </DataContext.Provider>
      </div>
  )
}

export default App
