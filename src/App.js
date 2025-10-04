import Column from "./components/Column/Column";
import Board from "./components/Board/Board";
import PopUp from "./components/PopUp/PopUp";

import "./App.css";


function App() {


  return (
    <div className="App">
      <PopUp />
      <div className="conteiner">
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
