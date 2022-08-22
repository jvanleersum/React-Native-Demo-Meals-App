import { View, StyleSheet, FlatList } from "react-native"
import { useContext } from "react";

import FavoritesContext from "../store/context/favorites-context";
import MealsTile from "../components/MealsTile";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({navigation}) => {
  const favCtx = useContext(FavoritesContext);
  const favIds = favCtx.ids;
  const favMeals = MEALS.filter(meal => favIds.includes(meal.id))

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
      <FlatList data={favMeals} renderItem={renderMealItem} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
