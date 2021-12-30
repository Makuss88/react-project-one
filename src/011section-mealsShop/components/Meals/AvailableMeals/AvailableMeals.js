import React, {useState, useEffect } from 'react';

import Card from '../../UI/Card/Card';
import MeatItem from '../MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const BASE_URL = "https://react-makuss-default-rtdb.europe-west1.firebasedatabase.app/meals.json";

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals]  = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          price: data[key].price,
          description: data[key].description,
          name: data[key].name,
        })
      }
      setMeals(loadedMeals);
    }

    fetchMeal()
  }, [])

  const mealsList = meals.map((meal) => (
    <MeatItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );

};

export default AvailableMeals;