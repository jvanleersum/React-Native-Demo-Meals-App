import { useContext } from "react";

import FavoritesContext from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favCtx = useContext(FavoritesContext);
  const favIds = favCtx.ids;
  const favMeals = MEALS.filter(meal => favIds.includes(meal.id))

  return <MealsList meals={favMeals} />
  
}

export default FavoritesScreen;


