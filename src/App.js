import { useState } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import MyModal from './components/MyModal/MyModal';
import ToDoList from './components/ToDoList/ToDoList';
import Button from './components/UI/Button';
import  * as dayjs from 'dayjs'

function App() {
  // массив задач
  const [arrList, setArrList] = useState([])
  // флаг для открытия/закрытия модального окна
  const [visible, setVisible] = useState(false)

/**
 * Функция добавляет новую задачу в массив задач, меняя State, так же меняет флаг visible на fals, для закрытия модального окна
 * @param {object} task объект задачи, он передается из компонента Form, имеет 6 обязательных полей (id, title, subtitle, date, file, compleat)
 * 
 */
  function addNewTask (task) {
     setArrList([...arrList, task])
     setVisible(false)
  }
  /**
   * Функция фильтрует массив по id и удаляет объект с переданным id, меняя State
   * @param {number} id передается из компонента ListItem
   */
  function removeTask (id) {
    setArrList([...arrList.filter((el)=> el.id !== id)])
  }
  /**
   * Функция закрывает задачу по клику, фильтрует массив по переданному id устанавливая у объекта с переданным id поле compleat в false
   * @param {number} id передается из компонента ListItem
   */
  function closeTask (id) {
    setArrList([...arrList.map((task)=> task.id === id ? {...task, compleat: !task.compleat} : {...task})])
  }

  /**
   * Функция закрывает задачу, если дата текущяя или прошедшая, устанавливая в объекте task поле compleat в false, меняя State. 
   * Внутри работает с объектом dayjs из библиотеки (dayjs) и его методами
   * @param {string} currentDate текущаяя дата, передается из компонента Form
   */
  function changStatus (currentDate) {
    setArrList([...arrList.map((task)=> {
        let num = dayjs(task.date).diff(currentDate, 'day')

        if (num === 0) {
          return {...task, compleat: false}
        } else if (Math.sign(num) === -1) {
          return {...task, compleat: false}
        }  else {
          return {...task}
        }
    })])
  }
  return (
    <div className="App">
      <header className='header'>To Do List</header>
      <Button onClick={()=> setVisible(true)}>Добавить задачу</Button>
      <MyModal visible={visible} setVisible={setVisible}>
        <Form
        changStatus={changStatus} 
        addNewTask={addNewTask}
        />
      </MyModal>
      <div className='container'>
      { arrList.length
      ? <ToDoList
          closeTask={closeTask}
          removeTask={removeTask}
          arrList={arrList}
        />
      : <h3 className='signboard'>Список задач пуст</h3>
      }
      </div>
    </div>
  );
}

export default App;
