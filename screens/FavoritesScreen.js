import { View, Text, StyleSheet, Button } from "react-native";
// import { useContext } from "react";
import { useSelector } from 'react-redux';

// import FavoritesContext from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({navigation}) => {
  const favIds = useSelector(state => state.ids)
  // const favCtx = useContext(FavoritesContext);
  // const favMeals = MEALS.filter((meal) => favCtx.ids.includes(meal.id));
  const favMeals = MEALS.filter((meal) => favIds.includes(meal.id));

  const allMealsHandler = () => {
    navigation.navigate("AllCategories")
  }

  if (favMeals.length === 0) {
    return <View style={styles.container}>
      <Text style={styles.noFavText}>You have not selected any favorites yet</Text>
      <Button title="Explore meals!" onPress={allMealsHandler} />
    </View>;
  }

  return <MealsList meals={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 16
  },
  noFavText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 50
  }
})