import React, { useContext } from "react"
import DataContext from "../DataContext"


export default function ComponentC() {
  const { userInfo, setUserInfo } = useContext(DataContext)
  return (
    <div className="card">
      <h2>This is Component C</h2>
      <ul>
        <li>Child of ComponentA</li>
        <li>Grandchild of App</li>
        <li>Cousin of ComponentD</li>
        <li>Nephew/Neice of ComponentB</li>
      </ul>

    
        <p style= {{color: userInfo.favColor}}> {userInfo.name}'s favorite movie is {userInfo.favMovie}</p> 
        <p> and their favorite food is {userInfo.favFood} </p>

      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "aqua",
            favFood: "Ribs"
          })
        }
      >
        Change to Aqua
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "red",
            favMovie: "Yojimbo"
          })
        }
      >
        Change to red
      </button>
    </div>
  )
    }
