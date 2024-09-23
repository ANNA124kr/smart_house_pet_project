import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddRoom(props) {

    //useNavigate not Navigate

    const [type,setType] = useState('')
    const [nameRoom,setNameRoom] = useState('')
    const [color,setColor] = useState(null)
    
    const nav = useNavigate()

  return (
    <div>

        <select onChange={(e) => {setType(e.target.value)}} >
        <option value ='' selected >Choose room</option>
        <option value ='Bedroom'>Bedroom</option>
        <option value ='Bethroom'> Bethroom</option>
        <option value ='Kitchen'>Kitchen</option>
        </select>


        <br />
      
      <input onChange={(e) => {setNameRoom(e.target.value)}} type="text" placeholder='Enter Name Room' maxLength={5} /> <br />
      <input onChange={(e) => {setColor(e.target.value)}} type="color"  /> <br />

    <button onClick={() => {props.addRoom(type,nameRoom,color); nav('/')}} >Create</button>


    </div>
  )
}
