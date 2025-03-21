import React, { useState } from "react";
import { Button } from 'antd';
import s from './EditForm.module.css';
import { useDispatch } from "react-redux";
import { editText } from "../../store/reducers/taskSlice"



const EditForm = ({task, isShow, setShow}) => {
   const [editValue, setEditValue] = useState(task.title)

   const dispatch = useDispatch()

   const editTextTask = () => {
       dispatch(editText([task, editValue]))
       setShow(!isShow)
   }

   return (
      <>
        <div onClick={() => setShow(!isShow)} className={s.editWrapper}>
           <div className={s.popUp} onClick={(e)=> e.stopPropagation()}>
              <textarea className={s.textarea} value={editValue} onChange={(e)=>{setEditValue(e.target.value)}} cols="30" rows="10"></textarea>
              <Button onClick={editTextTask}>Сохранить</Button>
           </div>
        </div>
      </>
   )
}

export default EditForm