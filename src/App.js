import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import Pizza from './components/Pizza';
import schema from "./components/pizzaFormSchema";
import * as yup from 'yup';

const initialPizzaValues = {
  name: '',
  size: '0',
  pepperoni: false,
  sausage: false,
  greenPepper: false,
  mushrooms: false,
  special: '',
};

const initialPizzaErrors = {
  name: ''
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [pizzaValues, setPizzaValues] = useState(initialPizzaValues);
  const [pizzaErrors, setPizzaErrors] = useState(initialPizzaErrors);
  const [orders, setOrders] = useState(initialOrders);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getOrders = () => {
  //   axios.get('https://reqres.in/api/orders')
  //   .then(res => {
  //     setOrders(res.data.data);
  //   })
  //   .catch(err => console.error(err))
  // }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log("set new orders worked", res.data)
      setOrders([res.data, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setPizzaValues(initialPizzaValues))
  }

  // side effects
  // useEffect(() => {
  //   getOrders()
  // }, []);

  useEffect(() => {
    schema.isValid(pizzaValues).then(valid => setDisabled(!valid))
  }, [pizzaValues])


  // validation function
  const validate = (name, value) =>{
    if(name === "name"){
      yup.reach(schema, name)
    .validate(value)
    .then(() => setPizzaErrors({...pizzaErrors, [name]: ''}))
    .catch(err => setPizzaErrors({...pizzaErrors, [name]: err.errors[0]}))
    }
  }

  // input change function
  const inputChange = (name, value) => {
    // check validation then set values
    validate(name, value);
    setPizzaValues({
      ...pizzaValues, [name]: value
    })
  }

  // form submit function
  const pizzaSubmit = () => {
    const newOrder = {
      name: pizzaValues.name.trim(),
      size: pizzaValues.size,
      toppings: ['pepperoni, sausage, greenPepper, mushrooms'].filter(topping => !!pizzaValues[topping]),
      special: pizzaValues.special.trim()
    }
    postNewOrder(newOrder);
  }

  // form submit function
  
  return (
    <>
      <nav>
        <div className='title'>
          <Link to='/'><h1>Bloom Pizzeria</h1></Link>
        </div>
        <div className='navLinks'>
          {/* ***Nav links here*** */}
          <Link to='/pizza'>Build a Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Pizza
          values={pizzaValues}
          change={inputChange}
          submit={pizzaSubmit}
          disabled={disabled}
          errors={pizzaErrors}
          />
        </Route>

        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
