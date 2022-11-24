import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import './form.css'

const Form = ({ addNewTask, changStatus }) => {
  // хранит значение value у input отвечающего за title задачи
  const [title, setTitle] = useState('')
  // хранит значение value у input отвечающего за subtitle задачи
  const [subtitle, setSubtitle] = useState('')
  // хранит значение value у input отвечающего за date задачи
  const [date, setDate] = useState('')
  // хранит объект файла из input type=file
  const [file, setFile] = useState('')
  // хранит флаг поля compleat в объекте task
  const [compleat, setCompleat] = useState(true)

  /**
   * Функция создает объект задачи и передает его в функцию addNewTask, вызывая ее в зависимости от заполненного поля date в объекте task. 
   * Также чистит value у input после добавленния задачи
   * 
   */
  function createNewTask () {
    const task = {
      id: Math.floor(Math.random() * 1000),
      title,
      subtitle,
      date,
      file,
      compleat
    }
    if (task.date === '') {
      return
    } else {
      addNewTask(task)
      setTitle('')
      setSubtitle('')
      setDate('')
      setFile(0)
    }
  }
  /**
   * Функция отрабатывает при событии onChange в input type=file связывая переменную file c объектом files из input
   * @param {Event} e собылие Change
   */
  function hendlerFile (e) {
    setFile(e.target.files)
  }
 // Хук следит за переменной date вызывая функция changStatus с текущей датой, для ее проверки
 useEffect(()=>{
  changStatus(new Date().toISOString().split('T')[0])
 }, [date])
   return (
    <>
     <form className='form'>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Заголовок'/>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} type="text" placeholder='Описание'/>
        <p>Дата завершения</p>
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date"/>
        <input onChange={hendlerFile} type="file"/>
        <Button disabled={!title || ! subtitle} type='button' onClick={createNewTask}>Добавить</Button>
     </form>
    </>
   )
}

export default Form