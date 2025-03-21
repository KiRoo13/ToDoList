import "./App.css";
import ButtonUI from "./UI/ButtonUI/ButtonUI";
import { useState } from "react";
import Column from "./components/Column/Column";
import Board from "./components/Board/Board";
import PopUp from "./components/PopUp/PopUp";

import { useSelector } from "react-redux";


function App() {
  const [show, setShow] = useState(false);

  const { toDo, inProgress, done } = useSelector(
    (state) => state.task.searchText
  );

  const isShow = () => setShow(!show);


  return (
    <div className="App">
      {show && <PopUp isShow={show} setShow={setShow} />}
      <div className="conteiner">
        <ButtonUI onClick={isShow}>Добавить задачу</ButtonUI>
        <Board>
          <Column title="Задачи" searchTitle="toDo"/>
          <Column title="В процессе" searchTitle="inProgress"/>
          <Column title="Сделанно" searchTitle="done"/>
        </Board>
      </div>
    </div>
  );
}

export default App;
