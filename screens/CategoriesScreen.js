import { View, FlatList, StyleSheet } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => <CategoryTile title={itemData.item.title} color={itemData.item.color}/>}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
