import React from "react";
// import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Select, Modal  } from "antd";
import s from "./Card.module.css";
import { useDispatch } from "react-redux";
import { removeTask, changeStatus } from "../../store/reducers/taskSlice";
import { useMemo, useState } from "react";
import EditForm from "../EditForm/EditForm";

const Card = ({ description, task }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [statusClass, setStatusClass] = useState("");
  const [edit, setEdit] = useState(false)

  const hendlerEdit = () => {
    setEdit(!edit)
  }

  useMemo(() => {
    if (task.status === "toDo") {
      setStatusClass(s.statusRed);
    }
    if (task.status === "inProgress") {
      setStatusClass(s.statusYellow);
    }
    if (task.status === "done") {
      setStatusClass(s.statusGreen);
    }
  }, [task]);

  return (
    <>
      <div className={s.card}>
        <div className={s.cardDiscription }>{description}</div>
        <span className={`${s.status} ${statusClass}`}></span>
        {edit ? (<EditForm task={task} isShow={edit} setShow={setEdit}/>) : (<EditOutlined onClick={hendlerEdit} />)}
        <Select
          onChange={(currentStatus) => {
            if (currentStatus !== task.status) {
              dispatch(changeStatus([currentStatus, task]));
            } else {
              Modal.error({
                title: "Error",
                content: "Текущий статус!",
              });
            }
          }}
        >
          <Option value="toDo">Задачи</Option>
          <Option value="inProgress">В процессе</Option>
          <Option value="done">Сделано</Option>
        </Select>
        <DeleteOutlined onClick={() => {dispatch(removeTask(task));}}/>
      </div>
    </>
  );
};

export default Card;
