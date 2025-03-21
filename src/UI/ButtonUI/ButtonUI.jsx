import React from "react";
import { Button } from "antd";


const ButtonUI = ({children, onClick}) => {
   return (
      <Button onClick={onClick}>{children}</Button>
   )
}


export default ButtonUI