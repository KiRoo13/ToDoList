import React, { useMemo, useState }  from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchTask} from "../../store/reducers/taskSlice";
import Card from "../Card/Card";
import Empty from '../Empty/Empty'
import Input from "antd/es/input/Input";
import s from "./Column.module.css";

const Column = ({ title, searchTitle }) => {
  const [serchText, setSerchText] = useState('')
   
  const allTasks = useSelector((state) => state.task.allTasks);
  console.log(allTasks)
   
  const myTasks = useMemo(()=> {
   return allTasks.filter((item) => item.status === searchTitle)
  }, [allTasks, searchTitle])






  const dispatch = useDispatch();

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
        {myTasks.length > 0 ? (
              myTasks
                .filter((item) => item.title.toUpperCase().includes(serchText.toUpperCase()))
                .map((item) => <Card key={item.id} task={item} />)
            ) : (
              <Empty messsageText={"Задач нет"} />
            )}
      </div>
    </>
  );
};

export default Column;
