import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Burger from './Components/Burger/Burger';
import Buttons from './Components/Buttons/Buttons'


const INGREDIENTS = [
  {filling: 'Salad', price: 5, disabled: true},
  {filling: 'Bacon', price: 30, disabled: true},
  {filling: 'Cheese', price: 20, disabled: true},
  {filling: 'Meat', price: 50, disabled: true}
];


class App extends Component {

  state ={

    ingredients: [],
    currentPrice: 20

  };



  addIngredient = (item) =>{

    const ingredients = [...this.state.ingredients];
    let currentPrice = this.state.currentPrice;
    item.disabled = false;
    ingredients.push(item);

    currentPrice += item.price;

    this.setState({ingredients, currentPrice});

  };

  delIngredients = (item) =>{

    const ingredients = [...this.state.ingredients];
    let currentPrice = this.state.currentPrice;
    currentPrice -= item.price;

    if(currentPrice <20) currentPrice=20;

    let index = ingredients.indexOf(item);
    item.disabled = true;

    if (index !== -1) {
      ingredients.splice(index, 1);
      index = ingredients.indexOf(item);
      if(index !== -1) item.disabled = false;
    }



    this.setState({ingredients, currentPrice});

  };



  render() {
    return (
      <div className="App">
        <Burger ingredients={this.state.ingredients}/>

        <Buttons
          menu={INGREDIENTS}
          add={this.addIngredient}
          del={this.delIngredients}
        />

        <h3>Current price {this.state.currentPrice}</h3>

      </div>
    );
  }
}

export default App;
