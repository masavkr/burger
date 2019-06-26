import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        //here???
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    },[]);
    console.log(transformedIngredients)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
