import { useState } from 'react';
import Button from './button';

function Calculator(){
const [displayValue, setDisplayValue]= useState('0');


return(
    <div>
        <div>{displayValue}</div>
        {/*aqui iran los botones de la calculadora*/}
        <Button value="1" onClick={() => setDisplayValue(displayValue + '1')}/>
        <Button value="+" onClick={() => console.log('logica para la suma')}/>    
    </div>
);

}

export default Calculator;