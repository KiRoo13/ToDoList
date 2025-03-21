import React from "react";
import s from './Board.module.css'


const Board = ({children}) => {
   return (
      <>
        <div className={s.board}>{children}</div>
      </>
   )
}

export default Board