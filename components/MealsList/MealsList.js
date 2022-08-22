import { View, StyleSheet, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealsTile from "./MealsTile";


const MealsList = ({meals}) => {
  const navigation = useNavigation();

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
      <FlatList data={meals} renderItem={renderMealItem} />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});