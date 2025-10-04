import { useState } from "react";
import { nanoid } from "nanoid";
import { Button, Input, Select, Modal } from "antd";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducers/taskSlice";

import s from "./PopUp.module.css";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const { Option } = Select;

  const dispatch = useDispatch();

  const addHandler = () => {
    const newTask = {
      id: nanoid(),
      title: inpValue,
      status: selectValue,
    };
    if (inpValue !== "" && selectValue !== "") {
      dispatch(addTask(newTask));
      setInpValue("");
      setSelectValue("");
      setShow(!show);
    } else {
      Modal.warning({
        content: "Заполните все поля!",
      });
    }
  };

  return (
    <>
      <div className={s.popUpButn}>
        <ButtonUI text="Добавить задачу" onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div onClick={() => setShow(!show)} className={s.popUpWrapper}>
          <div className={s.popUp} onClick={(e) => e.stopPropagation()}>
            <Input
              onChange={(e) => {
                setInpValue(e.target.value);
              }}
              value={inpValue}
              type="text"
              placeholder="Описание задачи"
            />
            <Select
              onChange={(e) => {
                setSelectValue(e);
              }}
              value={selectValue}
            >
              <Option value="toDo">Задачи</Option>
              <Option value="inProgress">В процессе</Option>
              <Option value="done">Сделано</Option>
            </Select>
            <Button onClick={addHandler}>Добавить</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
