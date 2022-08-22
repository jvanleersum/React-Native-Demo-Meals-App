import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealsList from "../components/MealsList/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const category = CATEGORIES.find(cat => cat.id === categoryId)

  useLayoutEffect(() => {
    navigation.setOptions({title: category.title});
  }, [category, navigation])

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return <MealsList meals={displayedMeals} />
};

export default MealsOverviewScreen;

