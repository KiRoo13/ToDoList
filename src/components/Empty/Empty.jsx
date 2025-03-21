import React from "react";
import s from './Empty.module.css'


const Empty = ({messsageText}) => {
   return (
      <>
        <div className={s.empty}>{ messsageText }</div>
      </>
   )
}

export default Empty