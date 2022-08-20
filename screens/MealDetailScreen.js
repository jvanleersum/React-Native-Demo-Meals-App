import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MealCard from "../components/MealCard";
import Subtitle from "../components/MealDetails/Subtitle";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [meal, navigation]);

  const mealCardProps = {
    title: meal.title,
    imageUrl: meal.imageUrl,
    affordability: meal.affordability,
    complexity: meal.complexity,
    duration: meal.duration,
    imageStyle: { height: 350 },
  };

  return (
    <View style={styles.outerContainer}>
      <MealCard {...mealCardProps} />
      <ScrollView style={styles.listsContainer}>
        <View>
          <Subtitle title="Ingredients" />
          <View style={styles.list}>
            {meal.ingredients.map((ingr) => (
              <Text key={ingr}>{ingr}</Text>
            ))}
          </View>
        </View>
        <View>
          <Subtitle title="Steps" />
          <View style={styles.list}>
            {meal.steps.map((step) => (
              <Text key={step}>{step}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 8,
  },
  listsContainer: {
    margin: 16,
    marginBottom: 50,
  },
  list: {
    marginVertical: 4
  }
});
