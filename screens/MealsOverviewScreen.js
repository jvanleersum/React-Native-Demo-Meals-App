import { View, Text, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
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
