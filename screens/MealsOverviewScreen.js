import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsTile from "../components/MealsTile";

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

  const navigationHandler = (mealId) => {
    navigation.navigate('MealDetail', {mealId: mealId})
  }

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: navigationHandler.bind(null, item.id)
    }
    return (
      <MealsTile {...mealItemProps}/>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
