import React, {useState, useEffect } from 'react';

import Card from '../../UI/Card/Card';
import MeatItem from '../MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const BASE_URL = "https://react-makuss-default-rtdb.europe-west1.firebasedatabase.app/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(BASE_URL);
      
      if (!response.ok) {
        throw new Error("Problem with my DB... sorry")
      }
      
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
      setIsLoading(false)
    }

      fetchMeal().catch(error => {
        setIsLoading(false);
        console.log(error)
        setError(error.message);
      });
  }, [])

  if(isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }
  
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>Error: {error}</p>
      </section>
    )
  }


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