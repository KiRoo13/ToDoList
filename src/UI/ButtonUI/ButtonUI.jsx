import React from "react";
import { Button } from "antd";


const ButtonUI = ({text, onClick}) => {
   return (
      <Button onClick={onClick}>{text}</Button>
   )
}


export default ButtonUI