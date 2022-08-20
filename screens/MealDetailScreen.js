import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import MealCard from "../components/MealCard";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import FavoriteButton from "../components/MealDetails/FavoriteButton";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const favoriteHandler = () => {
    setIsFavorite(prevState => !prevState);
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title, headerRight: () => {
      return <FavoriteButton isFavorite={isFavorite} onPress={favoriteHandler} />}})
  }, [meal, navigation, isFavorite, favoriteHandler]);

  const mealCardProps = {
    title: meal.title,
    imageUrl: meal.imageUrl,
    affordability: meal.affordability,
    complexity: meal.complexity,
    duration: meal.duration,
    imageStyle: styles.image,
  };

  return (
    <ScrollView>
      <View style={styles.outerContainer}>
        <MealCard {...mealCardProps} />
        <View style={styles.listsOuterContainer}>
          <View style={styles.listsInnerContainer}>
            <View>
              <Subtitle>Ingredients</Subtitle>
              <List items={meal.ingredients} />
            </View>
            <View>
              <Subtitle>Steps</Subtitle>
              <List items={meal.steps} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 8,
  },
  listsOuterContainer: {
    flex: 1,
    alignItems: "center",
  },
  listsInnerContainer: {
    width: "80%",
    marginBottom: 50,
  },
  image: {
    height: 350,
    borderRadius: 6
  }
});
