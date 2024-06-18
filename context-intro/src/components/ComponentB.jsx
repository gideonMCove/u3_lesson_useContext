import React, { useContext } from "react"
import  DataContext from "../DataContext"
import ComponentD from './ComponentD'


export default function ComponentB() {
  const { userInfo, setUserInfo } = useContext(DataContext)
  return (
    <div className="card">
      <h2>This is Component B</h2>
      <ul>
        <li>Child of App</li>
        <li>Sibling of ComponentA</li>
        <li>Parent of ComponentD</li>
        <li>Uncle/Aunt of ComponentC</li>
      </ul>
      <p>
        <p>{userInfo.name}'s favorite color is </p>
        <p style={{ color: userInfo.favColor }}>{userInfo.favColor}</p>
        <p> and his favourite movie is {userInfo.favMovie}</p>
      </p>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "orange",
            favMovie: "Airplane!"
          })
        }
      >
        Change to Orange
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink",
            favMovie: "No Country for Old Men"

          })
        }
      >
        Change to Pink
      </button>

      <div>
        <ComponentD/>
      </div>
    </div>
  )
    }
