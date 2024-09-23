import React, { useState } from 'react'

export default function AddItem(props) {


    const [item,setItem] =useState('')

    //const valid

  return (


    <div>

        <select onChange={(e)=>{setItem(e.target.value)}} >
          <option value=""> choose item </option>
            <option value="aircondition">aircondition</option>
            <option value="lamp">lamp</option>
            <option value="sterio">sterio</option>
            <option value="boiler">boiler</option>
        </select>

        <button onClick={() => {props.addItem(props.index,item)}} >Add</button>

    </div>
  )
}
