import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import MealCard from "./MealCard";

const MealsTile = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  onPress,
}) => {
  const mealCardProps = {
    title: title,
    imageUrl: imageUrl,
    affordability: affordability,
    complexity: complexity,
    duration: duration,
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <MealCard {...mealCardProps} />
      </Pressable>
    </View>
  );
};

export default MealsTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: "white",
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  }
});
