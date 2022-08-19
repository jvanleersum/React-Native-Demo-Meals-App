import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsTile from "../components/MealsTile";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
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
