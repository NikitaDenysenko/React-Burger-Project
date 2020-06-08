import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)// makes an array of keys from given object
        .map(igKey => {// igKey: 'salad', 'cheese', 'bacon', 'meat'
            return [...Array(props.ingredients[igKey])].map((_, i) => {//transforms (for example) cheese: 2 => [cheese,cheese]
                //[...Array(props.ingredients[igKey])]: creates array with length of object's values(1,2 ...);
                //.map((_, i): for keys
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el) // takes a given element and adds to array
        }, []);
    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;