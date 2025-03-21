import "./App.css";
import ButtonUI from "./UI/ButtonUI/ButtonUI";
import { useState } from "react";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";
import Board from "./components/Board/Board";
import PopUp from "./components/PopUp/PopUp";
import Empty from "./components/Empty/Empty";
import { useSelector } from "react-redux";


function App() {
  const [show, setShow] = useState(false);
  const toDoTasks = useSelector((state) => state.task.toDo);
  const inProgressTasks = useSelector((state) => state.task.inProgress);
  const doneTasks = useSelector((state) => state.task.done);
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
          {/* <Column title="Задачи" searchTitle="toDo" tasks={toDoTasks.filter((item) => item.status === STATUSES.todo)}> */}
          <Column title="Задачи" searchTitle="toDo">
            {toDoTasks.length > 0 ? (
              toDoTasks
                .filter((item) =>
                  item.title.toUpperCase().includes(toDo.toUpperCase())
                )
                .map((item) => (
                  <Card description={item.title} key={item.id} task={item} />
                ))
            ) : (
              <Empty messsageText={"Задач нет"} />
            )}
          </Column>
          <Column title="В процессе" searchTitle="inProgress">
            {inProgressTasks.length > 0 ? (
              inProgressTasks
                .filter((item) =>
                  item.title.toUpperCase().includes(inProgress.toUpperCase())
                )
                .map((item) => (
                  <Card description={item.title} key={item.id} task={item} />
                ))
            ) : (
              <Empty messsageText={"Задач нет"} />
            )}
          </Column>
          <Column title="Сделанно" searchTitle="done">
            {doneTasks.length > 0 ? (
              doneTasks
                .filter((item) =>
                  item.title.toUpperCase().includes(done.toUpperCase())
                )
                .map((item) => (
                  <Card description={item.title} key={item.id} task={item} />
                ))
            ) : (
              <Empty messsageText={"Задач нет"} />
            )}
          </Column>
        </Board>
      </div>
    </div>
  );
}

export default App;
