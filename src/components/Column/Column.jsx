import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTask} from "../../store/reducers/taskSlice";
import s from "./Column.module.css";
import Input from "antd/es/input/Input";

const Column = ({ title, searchTitle, children }) => {
//   const [search, setSearch] = useState('')

  const dispatch = useDispatch();

//   console.log(search)
  return (
    <>
      <div className={s.board__col}>
        <h2>{title}</h2>
        <div className={s.wrappwrInp}>
          <Input 
              className={s.inp} 
              placeholder="Пойск задачи..." 
              onChange={(e)=>dispatch(searchTask([e.target.value, searchTitle]))}
              />
        </div>
        {children}
      </div>
    </>
  );
};

export default Column;
