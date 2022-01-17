import React from 'react'
import "./Modal.css"
function Modal({children,hideHandler,show,setName,setAge,setOk,setShow,name,age,all,setAll}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    

    const okHandler=()=>{
        setOk(true)
        setShow(false)
        setAll([
            ...all,
            {name:name,age:age}
        ])
        setName("")
        setAge("")
    }
    return (
        <div className={showHideClassName}>
        <section className="modal1">
          {children}
          <button className='buttonModalCancel' type="button" onClick={hideHandler}>
            Close
          </button>
          <button className='buttonModalOk' type="button" onClick={okHandler}>
            ok
          </button>
          

        </section>
      </div>
    )
}

export default Modal
