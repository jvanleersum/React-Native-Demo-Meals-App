import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MealCard from "../components/MealCard";
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Ingredients</Text>
          </View>
          <View style={styles.list}>
            {meal.ingredients.map((ingr) => (
              <Text key={ingr}>{ingr}</Text>
            ))}
          </View>
        </View>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Steps</Text>
          </View>
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
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  titleContainer: {
    padding: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 50,
    marginVertical: 4,
  },
  listsContainer: {
    margin: 16,
    marginBottom: 50,
  },
  list: {
    marginVertical: 4
  }
});
