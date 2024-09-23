import React , {useState} from 'react'
import AddItem from './AddItem'



export default function Room(props) {

    const [flag, setFlag] = useState(false)

    const show = ()=>{
        if (flag == false) {
            return <div> <AddItem addItem ={props.addItem} index = {props.index}  />  </div>
        }else{
            return <div> <button onClick={change} > add Item </button> </div>
        }
    }

    const change = () => {
        setFlag(flag)
    }

  return (
    <div>
        <p> type : {props.type} </p>
        <p> name : {props.nameRoom} </p>
        {show()}

    {props.items.map((val,index) => {
        let condition = val.condition ? 'green' : 'red'
        return(
            <button style={{backgroundColor:condition}} onClick={() =>{props.chageCondition(props.index,index)}} > {val.type} </button>
        )
    })}

    {/* if (condition == true){
        condition = 'green'
        else{
            condition = 'red'
        }
    } */}


    </div>
  )
}
