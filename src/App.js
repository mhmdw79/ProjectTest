import { useState } from "react";
import Modal from "./Modal";
import "./App.css"
function App() {
  const showHandler = () => {
    setModal(true);
  };
  const hideHandler = () => {
    setModal(false);
    
  };
  const changeHandlerName = (e)=>{
    setName(e.target.value)
  }
  const changeHandlerAge = (e)=>{
    setAge(e.target.value)
  }
  const [ok, setOk] = useState(false);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [all,setAll]=useState([])

  return (
    <div>
  <div className="flex">
  <button className="add" onClick={showHandler}>Add to Table</button>
      <table>
        <tr className="tr">
          <th>Name</th>
          <th>Age</th>
        </tr>
    {ok && all.map(list=>(
      <tr><td>{list.name}</td><td>{list.age}</td></tr>
    ))}
      </table>
  </div>
      <Modal show={modal} setName={setName} name={name} age={age} setAge={setAge} setAll={setAll} all={all} setOk={setOk} ok={ok} setShow={setModal} hideHandler={hideHandler}>
        <input type="text" placeholder="Name" value={name} onChange={changeHandlerName} />
        <input type="text" placeholder="Age" value={age} onChange={changeHandlerAge}  />
      </Modal>
    </div>
  );
}

export default App;
