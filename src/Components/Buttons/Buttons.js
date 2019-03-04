import React from 'react';


import './Buttons.css';

import Button from './Button/Button'



const Buttons =(props) =>{

    return(
        <div className='buttonsContainer'>
            {props.menu.map((item, index) =>{
                return(
                    <Button key={index} name={item.filling}
                        addIngr={()=>props.add(item)}
                        delIngr={()=>props.del(item)}
                        diss={item.disabled}
                    />
                )
            })}
        </div>
    )

};
export default Buttons
