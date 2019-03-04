import React from'react';

import './Button.css'



const Button = (props) =>{

    return(

            <div>
                <span>{props.name}</span>
                <button onClick={props.delIngr} disabled={props.diss}>Less</button>
                <button onClick={props.addIngr}>More</button>
            </div>

    )

};

export default Button;