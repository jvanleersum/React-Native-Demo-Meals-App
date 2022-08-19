import { View, FlatList, StyleSheet } from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const navigationHandler = (categoryId) => {
    console.log(categoryId)
    navigation.navigate("MealsOverview")
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => (
          <CategoryTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={navigationHandler.bind(null, itemData.item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
