import Button from '../UI/Button'
import './listitem.scss'

const ListItem = ({ task, removeTask, closeTask }) => {
   /**
    * Функция отвечает за удаление элемента по id, передавая его в removeTask(приходит в props) 
    * @param {number} id 
    */
   function remove (id) {
      removeTask(id)
   }

   /**
    * Функция отвечает за просмотр информации о прикрепленном файле.
    * Выводит alert с информацией о нем, данные приходят в props из объекта task 
    */
   function see () {
      alert(`
       Информация о прекрепленном файле:
       Размер: ${task.file[0].size}, 
       Название: ${task.file[0].name}, 
       Тип: ${task.file[0].type}`)
   }

   /**
    * Функция отвечает за закрытие задачи по клюку по id, передавая его в closeTask(приходит в props) 
    * @param {number} id 
    */
   function changeTask (id) {
      closeTask(id)
   }

   /**
    * Функция отвечает за открытие задачи заново, передавая id в closeTask(приходит в props)
    * @param {number} id 
    */
   function returnTask (id) {
      closeTask(id)
   }

   return (
      <>
         <div className='wrapper'>
         { task.compleat
            ? <div onClick={()=> changeTask(task.id)} className='list__item' id={task.id}>
                  <div onClick={(e)=> e.stopPropagation()} className='list__item__top'>
                     <h3>{task.title}</h3>
                     <p>{task.subtitle}</p>
                  </div>
                  <div onClick={(e)=> e.stopPropagation()}>
                     <strong>Окончание задачи: {task.date}</strong>
                  </div>
                  <div onClick={(e)=> e.stopPropagation()} className='list__item__bottom'>
                     <Button disabled={task.file === '' || task.file === 0} onClick={()=> see()}>Прекрепленный файл</Button>
                     <Button onClick={()=> remove(task.id)}>Удалить</Button>
                  </div>
               </div>
            :  <div className='no' onClick={()=> returnTask(task.id)}>Задача закрыта</div>
            }
         </div>
      </>
   )
}

export default ListItem