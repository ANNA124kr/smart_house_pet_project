import React  from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
  return (
    <div>

{props.rooms.map((val,index) =>{
    return <Link to={`room${val.nameRoom}`} key={index} > <button key={index}  style={{backgroundColor:val.color, height:'100px' ,width:'100px'}}> {val.nameRoom} </button>  </Link>
})}

<Link to={'/addRoom'} ><button>+</button></Link>
</div>
    
  )
}
