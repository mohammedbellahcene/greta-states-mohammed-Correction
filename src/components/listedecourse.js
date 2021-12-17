import React, { useState } from "react";
import "./listedecourse.css";

const Listedecourse = () => {

    const [todolist, setTodoList] = useState([]);
    const [entry, setEntry] = useState("");





    return (
        <div>

            <input type="text" value={entry} onChange={event => { setEntry(event.target.value); }}></input>
            <button onClick={() => { let aux = [...todolist]; aux.push(entry); setTodoList(aux); setEntry(""); }}>Add</button>
            {
                todolist.map((x, i) => { return <div className="items"><button onClick={() => { let aux = [...todolist]; aux.splice(i, 1); setTodoList(aux) }}>X</button><span>{x}</span></div> })
            }


        </div>
    )
}
export default Listedecourse;


