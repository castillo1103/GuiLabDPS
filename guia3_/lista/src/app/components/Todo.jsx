import React, {useState} from 'react'

const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
        <div className={StyleSheet.list}>
        <h3 className='Titulo3'>{todo}</h3>
            <button className={StyleSheet.btn_delete} onClick={()=>deleteTodo(index)}>X</button>
        </div>
        </>
        
        )
    }
   export default Todo
       