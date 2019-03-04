import React from 'react';
import './Burger.css';

const Burger = (props) =>{

    return(
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>

            {props.ingredients.map((item, index) =>{
                return(
                    <div key={index} className={item.filling}></div>
                )
            })}

            <div className="BreadBottom"></div>

        </div>
    )

};

export default Burger;