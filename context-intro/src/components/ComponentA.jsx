//imports here!
import React, {useContext} from 'react'
import DataContext from '../DataContext'
import ComponentC from './ComponentC'

export default function ComponentA () {


    const {userInfo, setUserInfo } = useContext(DataContext)
    console.log('ComponentA', userInfo)//look at datacontext in app return


    return (
        <div className="card">
            <h2>This is component A</h2>


            <p>
                <p>{userInfo.name}'s favourite color is</p>
                <p style ={{color: userInfo.favColor}}> {userInfo.favColor}</p>
            </p>

            <button onClick={()=> setUserInfo ({...userInfo, favColor: "orange"})}>CHANGE COLOUR</button>
            <button onClick={()=> setUserInfo ({...userInfo, favColor: "teal"})}>CHANGE COLOUR BACK</button>

            <div>
                <ComponentC/>
                </div>



        </div>

               

    )
}