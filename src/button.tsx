import React from "react";
import {ButtonProps} from './ButtonProps';

const Button: React.FC<ButtonProps> = ({value, onclick}) =>{
    return(
        <button className="operator" onClick={onclick}>
        {value}
        </button>
    );
};
export default Button;