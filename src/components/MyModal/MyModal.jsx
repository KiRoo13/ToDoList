import './mymodal.scss'

const MyModal = ({children, visible, setVisible}) => {
   // массив отвечает за смену класса у модального окна в зависимости от флага visible
   const ClassesArr = ['modal-mask']
   if (visible) {
      ClassesArr.push('modal-mask-active')
   }

   return (
      <div onClick={()=> setVisible(false)} className={ClassesArr.join(' ')}>
         <div onClick={(e)=> e.stopPropagation()} className="modal-content">{children}</div>
      </div>
   )
}

export default MyModal