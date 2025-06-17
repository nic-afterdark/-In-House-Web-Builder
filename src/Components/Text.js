import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {

  const [editMode,setEditMode]=useState(false);
  const [val,setVal]=useState("Double Click to Edit & then Drag");

  

  const nodeRef = useRef(null); // Create a DOM ref

  return (
    <Draggable 

    nodeRef={nodeRef}>
      <div ref={nodeRef} >
       
       {
         editMode ? (
            <input 
                onDoubleClick={(e) => setEditMode(false)}
                value ={val}
                onChange={(e)=> setVal(e.target.value)}
                />
         ) : (
            <h1 onDoubleClick={e=>setEditMode(true)}>{val}</h1>
         )
       }

        

      </div>
    </Draggable>
  );
};

export default Text;

