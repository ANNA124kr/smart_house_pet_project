
import './App.css';
import { HashRouter as BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import Room from './components/Room';
import { useState } from 'react';

function App() {

  const [rooms,setRooms] =useState ([])
  const addRoom = (type,nameRoom,color) =>{
    setRooms([...rooms,{type:type,nameRoom:nameRoom,color:color,items:[]}])
  }

  //add item and check turn or off
  const addItem = (index,typeItem) => {
let temp ={condition:false,type:typeItem}
rooms[index].items.push(temp)
setRooms([...rooms])
  }


  const chageCondition = (indexRoom, indexItem) =>{
rooms[indexRoom].items[indexItem].condition = !rooms[indexRoom].items[indexItem].condition
setRooms([...rooms])
  }

  return (
    <div className="App">

      <h1>Smart House</h1>
      
<BrowserRouter>

<Routes>
  <Route path='/' element = {<HomePage rooms = {rooms} />} />
  <Route path='/addRoom' element = {<AddRoom addRoom = {addRoom} />} />

  {rooms.map((val,index) => {
    return <Route  path= {`room${val.nameRoom}`} element ={<Room addItem = {addItem}
                    chageCondition= {chageCondition}
                    index = {index} type = {val.type} 
                    nameRoom = {val.nameRoom} items ={val.items} />}  />
  })}

</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
