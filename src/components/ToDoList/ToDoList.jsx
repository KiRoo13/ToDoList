import ListItem from '../ListItem/ListItem'
import './todolist.css'

const ToDoList = ({ arrList, removeTask, closeTask }) => {
   return (
      <>
      <div className='list'>
         {
            arrList.map((task) => <ListItem closeTask={closeTask} removeTask={removeTask} key={task.id} task={task}/>)
         }
      </div>
      </>
   )
}

export default ToDoList