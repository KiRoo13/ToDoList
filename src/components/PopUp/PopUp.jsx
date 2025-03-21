import React, { useState } from "react";
import {nanoid} from 'nanoid'
import { Button, Input, Select } from 'antd';
import s from './PopUp.module.css';
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducers/taskSlice";


const PopUp = ({isShow, setShow}) => {

   const [inpValue, setInpValue] = useState('')
   const [selectValue, setSelectValue] = useState('')
   const { Option } = Select;

   const dispatch = useDispatch()


   const addHandler = () => {
      const newTask = {
         id: nanoid(),
         title: inpValue,
         status: selectValue
      }
      if (inpValue !== '' && selectValue !== '') {
         dispatch(addTask(newTask))
         setInpValue('')
         setSelectValue('')
         setShow(!isShow)

      }
   }

   return (
      <>
        <div onClick={() => setShow(!isShow)} className={s.popUpWrapper}>
           <div className={s.popUp} onClick={(e)=> e.stopPropagation()}>
              <Input onChange={(e)=>{setInpValue(e.target.value)}} 
                     value={inpValue}
                     type="text"
                     placeholder="Описание задачи" />
              <Select onChange={(e) => {setSelectValue(e)}}
                      value={selectValue}>
                  <Option value="toDo">Задачи</Option>
                  <Option value="inProgress">В процессе</Option>
                  <Option value="done">Сделано</Option>
              </Select>
              <Button onClick={addHandler}>Добавить</Button>
           </div>
        </div>
      </>
   )
}

export default PopUp